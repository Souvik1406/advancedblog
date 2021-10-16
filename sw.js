self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open('sw-cache').then(function(cache){
            return cache.add('index.html',
            'css/style.css',
            'thanks.css',
            'js/script.js',
            'thankyou.html',
            'images/about-img.jpg',
            'images/home-imh.jpg',
            'images/img-1.jpg',
            'images/img-2.jpg',
            'images/img-3.jpg',
            'images/img-4.jpg',
            'images/img-5.jpg',
            'images/img-6.jpg',
            'images/wdicon1.png',
            'images/wdicon2.png',
            'sw.js',
            'manifest.json'
            );
        })
    );
});

self.addEventListener('fetch',function(event){
    event.respondwith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});
