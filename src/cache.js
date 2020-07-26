import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

export function cache() {
  registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style',
    new StaleWhileRevalidate();
  );
}
