/* Nutrition Tracker v11 service worker
   Background Web Push receiver. A push server is required to actually schedule
   delivery while the PWA is closed. */
self.addEventListener('push', function(event) {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) { data = { body: event.data ? event.data.text() : '' }; }
  const title = data.title || (data.notification && data.notification.title) || '食事・服薬管理';
  const n = data.notification || data;
  const options = {
    body: n.body || '服用予定を確認してください',
    tag: n.tag || 'nutrition-health-reminder',
    data: { url: n.navigate || n.url || './' },
    badge: n.badge,
    icon: n.icon,
    renotify: false
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list) {
    for (const client of list) {
      if ('focus' in client) { client.navigate(url).catch(function(){}); return client.focus(); }
    }
    return clients.openWindow ? clients.openWindow(url) : undefined;
  }));
});
