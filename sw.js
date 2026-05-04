const CACHE_NAME = 'rb28-chem-v1';
const urlsToCache = [
  './index.html',
  './data.js',
  './F1.jpg',
  './icon.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});