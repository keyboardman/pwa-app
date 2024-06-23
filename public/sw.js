
let cacheData = 'AppV1';
this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {
            cache.addAll([
                '/static/js/bundle.js',
                '/index.html',
                '/manifest.json',
                '/logo192.png',
                '/favicon.ico',
                '/',
                '/users'
            ])
        })
    )
})

this.addEventListener("fetch", event => {
    if(!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(response => {
                if (response) {
                    return response
                }
                let requestUrl= event.request.clone()
                fetch(requestUrl)
            })
        )
    }
    
})