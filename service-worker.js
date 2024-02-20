var cacheName = 'petstore-v1';
var cacheFiles = [
    'petdepot.html',
    'product.js',
    'petstore.webmanifest',
    'images/Yarn.jpg',
    'images/KittyLitter.jpg',
    'images/Pointer.jpg',
    'images/    Cat_house_.jpg',
    'images/icon-store-512.png'
]

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache)=> {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );

});