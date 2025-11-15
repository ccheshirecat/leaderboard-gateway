export default async function (response, request, context) {
  const data = await response.json();

  // ---- Find the leaderboard array anywhere in the response ----
  const findArray = (obj) => {
    if (Array.isArray(obj)) return obj;

    if (obj && typeof obj === "object") {
      for (const v of Object.values(obj)) {
        if (Array.isArray(v)) return v;
        if (v && typeof v === "object") {
          const nested = findArray(v);
          if (Array.isArray(nested)) return nested;
        }
      }
    }

    return [];
  };

  const items = findArray(data);

  // ---- Extract the best-match field by name patterns ----
  const extract = (obj, patterns) => {
    let bestValue = null;
    let bestScore = 0;

    const walk = (o) => {
      if (!o || typeof o !== "object") return;

      for (const [k, v] of Object.entries(o)) {
        const key = k.toLowerCase();

        for (const p of patterns) {
          if (key.includes(p) && typeof v !== "object") {
            const score = p.length;
            if (score > bestScore) {
              bestScore = score;
              bestValue = v;
            }
          }
        }

        if (typeof v === "object") walk(v);
      }
    };

    walk(obj);
    return bestValue;
  };

  // ---- Emit ONLY username + wager ----
  const out = items.map((item) => ({
    username: extract(item, ["username", "user", "player", "name"]),
    wager: extract(item, ["wager", "bet", "amount", "value"]),
  }));

  return new Response(JSON.stringify(out), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}