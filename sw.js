const CACHE='smiths-screens-v11-test';
const FILES=['./','./index.html','./manifest.json','./assets/smiths_logo.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
