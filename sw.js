var _cacheName = 'sonicmania-9282022';
var _cacheFiles = [
	'RSDKv5.html',
	'RSDKv5.js',
	'RSDKv5.wasm',
  'https://dropbox.com/scl/fi/5h90bhqmho507k6385eti/Data.rsdk?rlkey=p61kc1wtkzo2aj6yh7oh3laxr&dl=1'
];
	
self.addEventListener('install', (e) => {
	console.log('[Service Worker] Install');
	e.waitUntil(
	    caches.open(_cacheName).then((cache) => {
	      console.log('[Service Worker] Caching all: Game executable and web files');
	      return cache.addAll(_cacheFiles);
	    })
	);
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
          return r || fetch(e.request).then((response) => {
                return caches.open(_cacheName).then((cache) => {
                	console.log('[Service Worker] Caching new resource: '+e.request.url);
                	cache.put(e.request, response.clone());
          			return response;
        });
      });
    })
  );
});
