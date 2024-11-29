const responses = {
  // Existing responses...
  "new question": "This is the response to the new question.",
  "another question": "This is another custom response.",
  "default": "I'm here to help. Can you clarify your question?"
};const CACHE_NAME = "my-website-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css", // Include your CSS file
    "/script.js",  // Include your JavaScript file
    "/icon-192x192.png",
    "/icon-512x512.png"
];

// Install the service worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch and serve from cache
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Activate and remove old caches
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

