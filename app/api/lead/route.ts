import { NextResponse } from "next/server";

// Emails each lead to RAF via Resend, alongside the LeadNudge capture that
// runs in the browser. Requires RESEND_API_KEY (and optionally LEAD_NOTIFY_TO,
// LEAD_FROM) in the environment. With Resend's default onboarding sender,
// mail can only be delivered to the Resend account owner's address; verify
// the raf domain in Resend to send from/to anything else.

const RESEND_API = "https://api.resend.com/emails";

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  budget: "Budget",
  form_name: "Form",
  landing_page: "Landing page",
  gclid: "gclid",
  keyword: "Keyword",
  ad_group: "Ad group",
};

function escapeHtml(value: unknown): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Email notifications not configured" }, { status: 503 });
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim().slice(0, 200);
  const email = String(data.email ?? "").trim().slice(0, 200);
  const phone = String(data.phone ?? "").trim().slice(0, 50);

  if (!name || !email || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 400 });
  }

  const rows = Object.entries(FIELD_LABELS)
    .map(([key, label]) => {
      const value = String(data[key] ?? "").trim().slice(0, 500);
      if (!value) return "";
      return `<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap">${label}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`;
    })
    .filter(Boolean)
    .join("");

  const budget = String(data.budget ?? "").trim();
  const page = String(data.landing_page ?? "").trim();
  const subject = `New lead: ${name}${budget ? ` · ${budget}` : ""}${page ? ` · ${page}` : ""}`;

  const res = await fetch(RESEND_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM ?? "RAF Landing Pages <onboarding@resend.dev>",
      to: [process.env.LEAD_NOTIFY_TO ?? "appointments@fwddigi.com"],
      reply_to: email,
      subject,
      html: `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111"><h2 style="font-weight:600">New landing page lead</h2><table style="border-collapse:collapse">${rows}</table></div>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error", res.status, detail);
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
