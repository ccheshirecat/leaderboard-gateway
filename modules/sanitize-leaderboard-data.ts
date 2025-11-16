export default async function (response, request, context) {
  const data = await response.json();

  // ---- Find deepest array containing leaderboard-like objects ----
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
  const out = items.map((item) => ({
    username: extract(item, ["username", "user", "player", "name"]),
    wager: extract(item, ["wager", "wager_total", "value", "amount", "bet"], {
      allowObjects: true, // *THIS IS THE IMPORTANT FIX*
    }),
  }));

  return new Response(JSON.stringify(out), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}