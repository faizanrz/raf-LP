import Script from "next/script";

// LeadNudge website lead capture. Provided by LeadNudge; do not reformat.
// Captures UTM/gclid params, listens for form submits site-wide, and posts
// name/email/phone plus custom fields to the RAF LeadNudge workspace.
const LEADNUDGE_SNIPPET = `
(function() {
  var API = 'https://raf.leadnudge.ae/api/leads/website';

  // Skip forms with a password field (login, register, reset-password)
  function hasPasswordField(form) {
    return !!form.querySelector('input[type=password]');
  }

  function captureParams() {
    var search = new URLSearchParams(window.location.search);
    var keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'];
    var fresh = {};
    keys.forEach(function(k) { if (search.get(k)) fresh[k] = search.get(k); });
    if (Object.keys(fresh).length > 0) {
      try { sessionStorage.setItem('_ln', JSON.stringify(fresh)); } catch(e) {}
    }
    try { return JSON.parse(sessionStorage.getItem('_ln') || '{}'); } catch(e) { return {}; }
  }

  function getLabel(el) {
    if (el.labels && el.labels[0]) return el.labels[0].textContent.trim();
    if (el.placeholder) return el.placeholder.trim();
    return el.name || el.id || '';
  }

  function detectType(el) {
    var h = [el.name, el.id, el.type, el.placeholder,
      el.labels && el.labels[0] ? el.labels[0].textContent : ''].join(' ').toLowerCase();
    if (/e[-_]?mail/.test(h)) return 'email';
    if (/phone|mobile|tel/.test(h)) return 'phone';
    if (/name/.test(h)) return 'name';
    return null;
  }

  function extractForm(form) {
    var data = {};
    var custom = {};
    var selector = 'input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=checkbox]):not([type=radio]), textarea, select';
    form.querySelectorAll(selector).forEach(function(el) {
      if (!el.value || !el.value.trim()) return;
      var t = detectType(el);
      if (t) {
        if (!data[t]) data[t] = el.value.trim();
      } else {
        var label = getLabel(el);
        if (label) custom[label] = el.value.trim();
      }
    });
    if (Object.keys(custom).length > 0) data.custom_fields = custom;
    return data;
  }

  function sendLead(formData) {
    if (!formData.email && !formData.phone) return;
    var payload = Object.assign({}, captureParams(), formData, {
      page_url: window.location.href,
      referrer: document.referrer || ''
    });
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(function() {});
  }

  // Dedup guard — prevents double-fire if both submit event and click event trigger
  var _lnLastSent = 0;
  function maybeSend(form) {
    if (hasPasswordField(form)) return;
    var now = Date.now();
    if (now - _lnLastSent < 500) return;
    _lnLastSent = now;
    sendLead(extractForm(form));
  }

  // Native form submit (standard HTML forms)
  document.addEventListener('submit', function(e) {
    if (e.target && e.target.tagName === 'FORM') maybeSend(e.target);
  }, true);

  // Submit button click (React/Next.js/AJAX forms that don't fire the native submit event)
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('button[type=submit], input[type=submit]');
    if (btn) {
      var form = btn.closest('form');
      if (form) maybeSend(form);
    }
  }, true);

  captureParams();
})();
`;

export default function LeadNudgeScript() {
  return (
    <Script id="leadnudge-capture" strategy="afterInteractive">
      {LEADNUDGE_SNIPPET}
    </Script>
  );
}
