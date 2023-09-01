var _cacheName = 'sonicmania-9282022';
var _cacheFiles = [
	'RSDKv5.html',
	'RSDKv5.js',
	'RSDKv5.wasm',
  'https://public.boxcloud.com/d/1/b1!kB00f4WTByzfyrYcXLLHh80f4Fb0Sr1h9SaEmKWMpMFFfgyeTDC35g87I6bDpYkgaLLFxvlo7KG82xBvUQNWMTGB7fVbgCGSEPejd8DlSyEQnARS8MtmlPMDyJbarIuaWBxWCj47zbDFzSYmPnCHGWNT0u8to8MJ7A7HXC4Mpj6zOFnl6Y_nXdtq_SPXOuDdSmNAL85VLOWsGNh_jWvbHJ1w37kgNDOUepH-4_-piyk0cutv7VZWsI2iiNB2nvWkCFNyWwhlWBAfAA1K5TdfSl5PU4lbAMkY_Z52VVj8q98fuWw8JhaYKf__O_ucbKKG_-835yyg7-LsucmAeiT4GArksdFAZC5mZGSqqvP5PNwEI15Atlp_pMocUwCaxK0tqunjTtrMIibaXefQuHWsim5lTNc1eT9oCLxx_v4bZp3iqJXW1xocj5vNDkheayPyFz7FinWnlaTPQ8G87HGuKrSM9MVPpRTWPPLnr-4MoZNrsE8xPKD7VfmkD1QZF8j28X1BbhJwGTeOeefbJx1q83NUk0JVRnTUFKXCkrjQVllHKzHPp_-_x5-ajw9hXs3DwQKzAaMG6lxcetsjD-nMsKvoULSWWU7WPZa5wjGbo06wwov-2sygl2eSA4DkvOlw6e01TT8CLsKrEwSwewaDG3g61HaVcy4n5u1-qHT0Kbx4SxMLLR6hqLeyZ95hX2aiOgv4P7yhjZPP7xZvhCC4ph44I9V0kjluXclv6Ap_fM9Uo0WiPmgu3PWQFa3DYXN7vO4fWI9TOY5Bn2v91Q8NtLjypga-YNTIOuIGWcnAeP0wcWTyp966Gx792P9xEd1fM5VQT28jWA60Yl3v_E4wAUNcCfQzJFEt7182IjakkSk4KrclTQY-btJ-jn2DIZd1Tx5gN9VAX4a2GaaErPh9HB8lfY_A70JrSzf8wNA8TcHwYdmnhSHNH2vN5X5D2j2Lred9L5-aSO5B8IEd4HqcAvooS9Pf3AeOKOVuRJeIh4H57XFTcKNt70vwTp3bxFTamjMvvUSWQPJgGAIxH5mFvY9Fe4C3U2mwxry69A3HUCxlMKqhkHqUEwGlt894pOQAUnsUIyQxOmVdnxEhlsCgeE9MlGjSozzgX218_XCmqQcSmlTXHLYdr_lIU0v9Kq39T6WTA7DT2dxCm4GLJjRkLi5mlOS2ArEAvFqd4WKd6WEfxJ3L5LMODItG_vUbnMWna0klsIwzRK3hS5zW7NcZE8e2qwX8dWivWiTRp7sf62j3y8uu3mYeAxhpQx0FPQNzRSGdUj8Hex7JTbjWYWNFMOoKgC_QIIA1ijwpo9B0J7J9NUSGcp2g8gMXi4dGxAcHopRe2sg0krViughW_s_vjSA29JVFOJRE8wAGGAqS5ag./download'
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
