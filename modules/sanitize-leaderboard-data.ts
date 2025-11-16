export default async function (response, request, context) {
  // Check if the upstream response was successful
  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch from casino API" }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }

  const data = await response.json();

  // Quick path: Check if data.items exists (your API structure)
  if (data.items && Array.isArray(data.items)) {
    const out = data.items.map((item) => ({
      username: item.username || null,
      wager: item.wager?.value || item.wager || null,
    }));

    return new Response(JSON.stringify(out), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  }

  // Fallback: Find deepest array containing leaderboard-like objects
  const findArray = (obj) => {
    if (Array.isArray(obj)) return obj;

    if (obj && typeof obj === "object") {
      for (const v of Object.values(obj)) {
        const res =
          Array.isArray(v) ? v :
          typeof v === "object" ? findArray(v) :
          null;

        if (Array.isArray(res)) return res;
      }
    }

    return [];
  };

  const items = findArray(data);

  // ---- Smart field extractor ----
  const extract = (root, patterns, { allowObjects = false } = {}) => {
    let bestScore = 0;
    let bestValue = null;

    const walk = (o) => {
      if (!o || typeof o !== "object") return;

      for (const [k, v] of Object.entries(o)) {
        const key = k.toLowerCase();

        for (const p of patterns) {
          if (key.includes(p)) {
            const score = p.length;

            // Return object fields only if allowed (wager objects)
            if (typeof v === "object" && allowObjects) {
              if (score > bestScore) {
                bestScore = score;
                bestValue = v;
              }
            }

            // Return primitives normally
            if (typeof v !== "object") {
              if (score > bestScore) {
                bestScore = score;
                bestValue = v;
              }
            }
          }
        }

        // Walk deeper
        if (typeof v === "object") walk(v);
      }
    };

    walk(root);
    return bestValue;
  };

  // ---- Only emit what the frontend needs ----
  const out = items.map((item) => {
    const username = extract(item, ["username", "user", "player", "name"]);
    const wagerObj = extract(item, ["wager", "wager_total", "amount", "bet"], {
      allowObjects: true,
    });

    // Extract the numeric value from wager object if it exists
    let wager = wagerObj;
    if (wagerObj && typeof wagerObj === "object" && wagerObj.value !== undefined) {
      wager = wagerObj.value;
    }

    return { username, wager };
  });

  return new Response(JSON.stringify(out), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}