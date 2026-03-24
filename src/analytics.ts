const INGESTOR_URL = import.meta.env.VITE_INGESTOR_URL || 'https://ingestor.nuclearbomb6518.com';

export function trackEvent(
  eventType: string,
  metadata: Record<string, unknown> = {}
) {
  if (typeof window === 'undefined') return;
  fetch(`${INGESTOR_URL}/v1/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event_type: eventType,
      service_id: 'profile',
      metadata: {
        ...metadata,
        path: window.location.pathname,
        referrer: document.referrer || undefined,
      },
    }),
  }).catch(() => {});
}
