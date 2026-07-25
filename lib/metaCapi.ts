// Client-side half of the Meta Conversions API integration.
// Fires the browser pixel and the server relay with a shared event_id,
// so Meta deduplicates the pair and keeps the richer server event.
//
// Match-quality parameters sent when available: em, ph, fn, ln (hashed
// server-side), fbp, fbc (built from fbclid if the cookie is absent),
// external_id (first-party anonymous id), client IP and user agent
// (added by the server route).

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

function safeGet(store: Storage, key: string): string {
  try {
    return store.getItem(key) ?? "";
  } catch {
    return "";
  }
}

function safeSet(store: Storage, key: string, value: string) {
  try {
    store.setItem(key, value);
  } catch {}
}

function newId(): string {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** First-party anonymous id, stable per browser. Sent as external_id. */
export function getExternalId(): string {
  let id = safeGet(localStorage, "raf_ext_id");
  if (!id) {
    id = newId();
    safeSet(localStorage, "raf_ext_id", id);
  }
  return id;
}

/**
 * Click ID. Prefer the _fbc cookie; if absent but the landing URL carries
 * fbclid (Meta ad click), construct fbc per Meta's format and remember it.
 */
export function getFbc(): string {
  const cookie = getCookie("_fbc");
  if (cookie) return cookie;
  const stored = safeGet(sessionStorage, "raf_fbc");
  if (stored) return stored;
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (fbclid) {
    const built = `fb.1.${Date.now()}.${fbclid}`;
    safeSet(sessionStorage, "raf_fbc", built);
    return built;
  }
  return "";
}

/** Persisted after a form submit so later events carry the same PII. */
function getStoredPii(): ExtraFields {
  try {
    return JSON.parse(safeGet(localStorage, "raf_lead_pii") || "{}");
  } catch {
    return {};
  }
}

export function sendMetaEvent(eventName: "Lead" | "ViewContent", extra: ExtraFields = {}) {
  const eventId = newId();

  // Remember lead details so subsequent events improve match quality too.
  if (extra.email || extra.phone) {
    safeSet(localStorage, "raf_lead_pii", JSON.stringify(extra));
  }
  const pii = { ...getStoredPii(), ...extra };

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
      fbc: getFbc(),
      external_id: getExternalId(),
      ...pii,
    }),
  }).catch(() => {});
}
