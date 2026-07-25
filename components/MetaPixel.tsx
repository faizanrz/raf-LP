"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { sendMetaEvent } from "@/lib/metaCapi";

const PIXEL_ID = "1389593926371441";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Meta Pixel, all pages. The base snippet fires PageView on the initial
// load; the effect below covers client-side route changes (e.g. the
// form redirect to /thank-you/), which the pixel does not see natively.
export default function MetaPixel() {
  const pathname = usePathname();
  const initialLoad = useRef(true);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
    } else {
      // The base snippet only covers the initial load; fire PageView on
      // client-side route changes (e.g. the /thank-you/ redirect).
      window.fbq?.("track", "PageView");
    }
    // ViewContent on every page, browser + Conversions API, deduplicated.
    sendMetaEvent("ViewContent");
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          // Advanced matching: first-party external_id, plus lead details
          // persisted after a form submit. The pixel hashes these itself.
          var am = {};
          try {
            var eid = localStorage.getItem('raf_ext_id');
            if (!eid) {
              eid = (self.crypto && crypto.randomUUID) ? crypto.randomUUID()
                : String(Date.now()) + Math.random().toString(36).slice(2);
              localStorage.setItem('raf_ext_id', eid);
            }
            am.external_id = eid;
            var pii = JSON.parse(localStorage.getItem('raf_lead_pii') || '{}');
            if (pii.email) am.em = pii.email;
            if (pii.phone) am.ph = pii.phone.replace(/[^0-9]/g, '');
            if (pii.first_name) am.fn = pii.first_name;
            if (pii.last_name) am.ln = pii.last_name;
          } catch (e) {}
          fbq('init', '${PIXEL_ID}', am);
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
