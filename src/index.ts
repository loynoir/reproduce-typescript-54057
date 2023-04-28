export const mod = await (async () => {
  const x: number = 0;
  switch (x) {
    case 0:
      return await import("./case0.js");
    case 1:
      return await import("./case1.js");
    default:
      return await import("./caseFallback.js");
  }
})();
