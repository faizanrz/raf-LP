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
          fbq('init', '${PIXEL_ID}');
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
