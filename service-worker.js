const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.53598fdd.js",
  s + "/_app/immutable/assets/0.9793758c.css",
  s + "/_app/immutable/nodes/0.1d098126.js",
  s + "/_app/immutable/nodes/1.dba2d0ec.js",
  s + "/_app/immutable/assets/2.dadff33c.css",
  s + "/_app/immutable/nodes/2.db8f722a.js",
  s + "/_app/immutable/nodes/3.d9801271.js",
  s + "/_app/immutable/nodes/4.3515f347.js",
  s + "/_app/immutable/assets/EditButton.0d24e5da.css",
  s + "/_app/immutable/chunks/EditButton.90050fa5.js",
  s + "/_app/immutable/chunks/index.873908ac.js",
  s + "/_app/immutable/chunks/singletons.351ef785.js",
  s + "/_app/immutable/chunks/stores.2aa88a39.js",
  s + "/_app/immutable/entry/start.3663dc0c.js"
], d = [
  s + "/.nojekyll",
  s + "/favicon.png",
  s + "/logo_512.png",
  s + "/manifest.json",
  s + "/robots.txt"
], i = "1724121332340", l = `cache_${i}`, p = h.concat(d), m = new Set(p);
self.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(l).then((e) => e.addAll(p)).then(() => {
      self.skipWaiting();
    }).catch(console.error)
  );
});
self.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== l && await caches.delete(a);
      self.clients.claim();
    }).catch(console.error)
  );
});
async function u(t) {
  const e = await caches.open(`offline_${i}`);
  try {
    const a = await fetch(t);
    return e.put(t, a.clone()), a;
  } catch (a) {
    const c = await e.match(t);
    if (c)
      return c;
    throw a;
  }
}
self.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET" || t.request.headers.has("range"))
    return;
  const e = new URL(t.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host, o = n && m.has(e.pathname), r = t.request.cache === "only-if-cached" && !o;
  a && n && !c && !r && t.respondWith(
    (async () => o && await caches.match(t.request) || u(t.request))()
  );
});
