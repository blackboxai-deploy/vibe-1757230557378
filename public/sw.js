// Service Worker for TUP-Cuenca Disaster Preparedness App
// Provides offline functionality and caching

const CACHE_NAME = 'tup-disaster-prep-v1';
const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

// Files to cache for offline functionality
const STATIC_FILES = [
  '/',
  '/manifest.json',
  '/disasters',
  '/disasters/typhoon',
  '/disasters/earthquake',
  '/disasters/flood',
  '/disasters/fire',
  '/disasters/volcano',
  '/emergency',
  '/emergency/contacts',
  '/emergency/routes',
  '/emergency/first-aid',
  '/preparedness',
  '/preparedness/kit',
  '/preparedness/plan',
  '/preparedness/family',
  '/learning',
  '/resources'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('Service Worker: Caching static files');
      return cache.addAll(STATIC_FILES);
    }).catch((error) => {
      console.error('Service Worker: Error caching static files', error);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== STATIC_CACHE && cache !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve cached files when offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        console.log('Service Worker: Serving from cache:', event.request.url);
        return cachedResponse;
      }

      // Otherwise, fetch from network
      return fetch(event.request).then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone response for caching
        const responseToCache = response.clone();

        // Cache dynamic content
        caches.open(DYNAMIC_CACHE).then((cache) => {
          // Only cache GET requests for same origin
          if (event.request.url.startsWith(self.location.origin)) {
            cache.put(event.request, responseToCache);
          }
        });

        return response;
      }).catch(() => {
        // Network failed, try to serve offline fallback
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
        
        // For images, return a placeholder
        if (event.request.destination === 'image') {
          return new Response(
            '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280">Image Offline</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
      });
    })
  );
});

// Message event - handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_EMERGENCY_DATA') {
    // Cache critical emergency data
    const emergencyData = event.data.payload;
    caches.open(STATIC_CACHE).then((cache) => {
      cache.put('/emergency-data', new Response(JSON.stringify(emergencyData), {
        headers: { 'Content-Type': 'application/json' }
      }));
    });
  }
});

// Background sync for emergency updates
self.addEventListener('sync', (event) => {
  if (event.tag === 'emergency-update') {
    event.waitUntil(
      // Sync emergency data when connection is restored
      fetch('/api/emergency-updates')
        .then(response => response.json())
        .then(data => {
          // Update cached emergency data
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put('/emergency-data', new Response(JSON.stringify(data), {
              headers: { 'Content-Type': 'application/json' }
            }));
          });
          
          // Notify clients of update
          self.clients.matchAll().then((clients) => {
            clients.forEach((client) => {
              client.postMessage({
                type: 'EMERGENCY_DATA_UPDATED',
                payload: data
              });
            });
          });
        })
        .catch(error => {
          console.log('Background sync failed:', error);
        })
    );
  }
});

// Push notification event
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      tag: 'disaster-alert',
      requireInteraction: true,
      actions: [
        {
          action: 'view',
          title: 'View Details',
          icon: '/icon-192x192.png'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'view') {
    event.waitUntil(
      self.clients.openWindow('/')
    );
  }
});

console.log('TUP-Cuenca Disaster Preparedness Service Worker loaded');