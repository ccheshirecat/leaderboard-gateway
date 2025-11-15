export default async function (response, request, context) {
  const data = await response.json();

  const findArray = (obj) => {
    if (Array.isArray(obj)) return obj;
    if (obj && typeof obj === "object") {
      for (const [k, v] of Object.entries(obj)) {
        if (Array.isArray(v)) return v;
        if (v && typeof v === "object") {
          const nested = findArray(v);
          if (nested) return nested;
        }
      }
    }
    return [];
  };

  const items = findArray(data);

  const extract = (obj, patterns) => {
    const matches = [];
    const walk = (o) => {
      if (o && typeof o === "object") {
        for (const [k, v] of Object.entries(o)) {
          const key = k.toLowerCase();
          patterns.forEach((p) => {
            if (key.includes(p)) matches.push({ value: v, score: p.length });
          });
          walk(v);
        }
      }
    };
    walk(obj);
    return matches.length
      ? matches.sort((a, b) => b.score - a.score)[0].value
      : null;
  };

  const out = items.map((item) => ({
    raw: item,
    username: extract(item, ["username", "player", "name", "user"]),
    wager: extract(item, ["wager", "bet", "amount", "value"]),
  }));

  return new Response(JSON.stringify(out), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}