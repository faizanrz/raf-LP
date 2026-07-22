// Client-side half of the Meta Conversions API integration.
// Fires the browser pixel and the server relay with a shared event_id,
// so Meta deduplicates the pair and keeps the richer server event.

type ExtraFields = {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
};

function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : "";
}

export function sendMetaEvent(eventName: "Lead" | "ViewContent", extra: ExtraFields = {}) {
  const eventId =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  // Browser pixel side. fbq may not have initialised yet on first load;
  // retry briefly rather than lose the event.
  const fireBrowser = (tries = 0) => {
    const fbq = (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq;
    if (fbq) fbq("track", eventName, {}, { eventID: eventId });
    else if (tries < 60) setTimeout(() => fireBrowser(tries + 1), 250);
  };
  fireBrowser();

  // Server side (Conversions API), same event_id for deduplication.
  fetch("/api/meta-events/", {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
      ...extra,
    }),
  }).catch(() => {});
}
