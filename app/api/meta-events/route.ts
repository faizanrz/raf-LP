import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

/*
  Meta Conversions API relay.

  The browser fires the same event through the pixel with an identical
  event_id, so Meta deduplicates the pair (event_id + event_name).
  PII is normalised and SHA-256 hashed here, server-side, per Meta spec.
  Client IP and user agent are taken from the request, never hashed.
*/

const PIXEL_ID = "1389593926371441";
const API_VERSION = "v23.0";
const ALLOWED_EVENTS = new Set(["Lead", "ViewContent"]);

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

const normalise = (s: string) => s.trim().toLowerCase();

export async function POST(req: NextRequest) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    return NextResponse.json({ ok: false, error: "CAPI not configured" }, { status: 503 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const eventName = body.event_name;
  if (!eventName || !ALLOWED_EVENTS.has(eventName) || !body.event_id) {
    return NextResponse.json({ ok: false, error: "Invalid event" }, { status: 400 });
  }

  const userData: Record<string, unknown> = {
    client_user_agent: req.headers.get("user-agent") ?? "",
    client_ip_address: (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim(),
  };

  if (body.email) userData.em = [hash(normalise(body.email))];
  if (body.phone) {
    const digits = body.phone.replace(/\D/g, "");
    if (digits) userData.ph = [hash(digits)];
  }
  if (body.first_name) userData.fn = [hash(normalise(body.first_name))];
  if (body.last_name) userData.ln = [hash(normalise(body.last_name))];
  if (body.fbp) userData.fbp = body.fbp;
  if (body.fbc) userData.fbc = body.fbc;

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: String(body.event_id).slice(0, 100),
    event_source_url: body.event_source_url ?? "",
    action_source: "website",
    user_data: userData,
  };

  const res = await fetch(`https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [event], access_token: token }),
  });

  const detail = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("Meta CAPI error", res.status, JSON.stringify(detail));
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true, events_received: detail.events_received ?? 0 });
}
