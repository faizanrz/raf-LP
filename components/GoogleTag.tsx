import Script from "next/script";

const GA_ID = "G-B8FB7693BM";

// Google tag (gtag.js), loaded after hydration on every page.
export default function GoogleTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');

          // Contact click events: every WhatsApp and phone link on the site.
          // Imported into Google Ads as conversions via GA4 key events.
          document.addEventListener('click', function (e) {
            var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
            if (!a) return;
            var href = a.getAttribute('href') || '';
            // #leadnudge-whatsapp anchors open the LeadNudge widget panel, not
            // a chat — the widget fires its own WhatsApp_Started on submit, so
            // counting the panel-open here would inflate the Ads conversion.
            if (href.indexOf('#leadnudge-whatsapp') !== -1) return;
            if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) {
              gtag('event', 'whatsapp_click', {
                link_url: href.split('?')[0],
                page_path: location.pathname
              });
            } else if (href.indexOf('tel:') === 0) {
              gtag('event', 'call_click', {
                link_url: href,
                page_path: location.pathname
              });
            }
          }, true);
        `}
      </Script>
    </>
  );
}
