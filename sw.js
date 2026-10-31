// Vent Check offline cache. Change VERSION whenever any file changes, so phones fetch the update.
const VERSION = "vent-check-2026-10-31.1";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "apple-touch-icon.png",
  "favicon-32.png",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png",
  "atkinson-hyperlegible-latin-400-normal.woff2",
  "atkinson-hyperlegible-latin-700-normal.woff2",
  "barlow-semi-condensed-latin-600-normal.woff2",
  "barlow-semi-condensed-latin-700-normal.woff2",
  "ibm-plex-mono-latin-500-normal.woff2",
  "ibm-plex-mono-latin-600-normal.woff2"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first for the page (so updates show up when online), cache first for everything else.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put("index.html", copy)); return res; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  event.respondWith(caches.match(event.request).then((hit) => hit || fetch(event.request)));
});
