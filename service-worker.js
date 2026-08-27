const CACHE_NAME = 'bolao-26-27-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// App shell: cache-first. Chamadas ao Graph API (onedrive/sharepoint/graph.microsoft.com)
// nunca devem ser cacheadas — sempre precisam ir para a rede, senão os dados ficam desatualizados.
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  const isApiCall = url.includes('graph.microsoft.com') || url.includes('login.microsoftonline.com');
  if (isApiCall) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
