"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { LEAD_ENDPOINT } from "@/lib/site";

const BUDGETS = ["Under AED 2M", "AED 2M to 5M", "AED 5M to 10M", "AED 10M+"];

type Props = {
  buttonLabel: string;
  formName: string; // distinguishes top vs bottom form in analytics
  showBudget?: boolean;
  compact?: boolean;
};

type Hidden = {
  gclid: string;
  keyword: string;
  ad_group: string;
  landing_page: string;
};

export default function LeadForm({ buttonLabel, formName, showBudget = true }: Props) {
  const router = useRouter();
  const [budget, setBudget] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [hidden, setHidden] = useState<Hidden>({
    gclid: "",
    keyword: "",
    ad_group: "",
    landing_page: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setHidden({
      gclid: params.get("gclid") ?? "",
      keyword: params.get("keyword") ?? params.get("utm_term") ?? "",
      ad_group: params.get("ad_group") ?? params.get("utm_content") ?? "",
      landing_page: window.location.pathname,
    });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    // The LeadNudge script captures this submission independently, so a
    // failure of the email notification route must not read as a failed
    // enquiry to the visitor.
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) console.error("Lead email notification failed:", res.status);
    } catch (err) {
      console.error("Lead email notification failed:", err);
    }
    setStatus("done");
    // Dedicated confirmation page, used as the Google Ads conversion event.
    router.push("/thank-you/");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" aria-label={formName}>
      <input type="hidden" name="form_name" value={formName} />
      <input type="hidden" name="gclid" value={hidden.gclid} />
      <input type="hidden" name="keyword" value={hidden.keyword} />
      <input type="hidden" name="ad_group" value={hidden.ad_group} />
      <input type="hidden" name="landing_page" value={hidden.landing_page} />

      <label className="sr-only" htmlFor={`${formName}-name`}>Name</label>
      <input id={`${formName}-name`} name="name" required autoComplete="name" placeholder="Name" className="field" />

      <label className="sr-only" htmlFor={`${formName}-email`}>Email</label>
      <input id={`${formName}-email`} name="email" type="email" required autoComplete="email" placeholder="Email" className="field" />

      <label className="sr-only" htmlFor={`${formName}-phone`}>Phone</label>
      <input
        id={`${formName}-phone`}
        name="phone"
        type="tel"
        required
        autoComplete="tel"
        defaultValue="+44 "
        placeholder="+44 7700 000000"
        className="field"
      />

      {showBudget && (
        <fieldset>
          <legend className="mb-2 text-[0.6875rem] uppercase tracking-[0.2em] text-muted">Budget</legend>
          <div className="grid grid-cols-2 gap-2">
            {BUDGETS.map((b) => (
              <label key={b} className={`budget-pill ${budget === b ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  className="sr-only"
                  onChange={() => setBudget(b)}
                  checked={budget === b}
                />
                {b}
              </label>
            ))}
          </div>
          {/* Mirror for lead-capture scripts that skip radio inputs. Not visible, not focusable. */}
          <input
            type="text"
            name="budget"
            value={budget}
            readOnly
            tabIndex={-1}
            aria-hidden="true"
            className="sr-only"
          />
        </fieldset>
      )}

      <button type="submit" className="btn-gold mt-1" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : buttonLabel}
      </button>

    </form>
  );
}
