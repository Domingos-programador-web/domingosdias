const CACHE_NAME = 'portfolio-cache-v1';

const assets = ['./', './index.html', './css/styles.css','./css/slide.css','./css/bot.js','./js/scripts.js','./js/link.js','./js/slide.js','./js/bot/knowledgeBase.js','./js/bot/bot.js']; // adicione seus arquivos principais

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});