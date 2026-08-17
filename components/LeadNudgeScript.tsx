import Script from "next/script";

// LeadNudge website lead capture. Provided by LeadNudge; do not reformat.
// First-touch attribution in localStorage (90 days), form-submit capture
// site-wide, journey signals, and phone-shape fallback detection. Posts to
// the RAF LeadNudge workspace.
// String.raw keeps the snippet's regex backslashes (\d, \b, ...) intact.
const LEADNUDGE_SNIPPET = String.raw`
(function() {
  var API = 'https://raf.leadnudge.ae/api/leads/website';

  // Skip forms with a password field (login, register, reset-password)
  function hasPasswordField(form) {
    return !!form.querySelector('input[type=password]');
  }

  // First-touch attribution, stored in localStorage for 90 days so ad clicks
  // survive new tabs and return visits. A new tagged click (any UTM / click ID
  // in the URL) restarts first touch with the new params. The first external
  // referrer and first landing page are captured once per first touch, so
  // organic leads still show where the visitor originally came from.
  function captureParams() {
    var KEY = '_ln';
    var TTL = 90 * 24 * 60 * 60 * 1000;
    var store = {};
    try { store = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch(e) {}
    if (!store.v || !store.t || (Date.now() - store.t > TTL)) store = { t: Date.now(), v: {} };
    var search = new URLSearchParams(window.location.search);
    var keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'];
    var fresh = {};
    keys.forEach(function(k) { if (search.get(k)) fresh[k] = search.get(k); });
    if (Object.keys(fresh).length > 0) {
      store = { t: Date.now(), v: fresh };
    }
    if (!store.v.first_landing_page) store.v.first_landing_page = window.location.href;
    var ref = document.referrer || '';
    if (ref && !store.v.first_referrer) {
      var external = false;
      try { external = new URL(ref).hostname !== window.location.hostname; } catch(e) {}
      if (external) store.v.first_referrer = ref;
    }
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch(e) {}
    // Merge params saved by the previous sessionStorage-based snippet
    try {
      var old = JSON.parse(sessionStorage.getItem('_ln') || '{}');
      Object.keys(old).forEach(function(k) { if (!store.v[k]) store.v[k] = old[k]; });
    } catch(e) {}
    return store.v;
  }

  function getLabel(el) {
    if (el.labels && el.labels[0]) return el.labels[0].textContent.trim();
    if (el.placeholder) return el.placeholder.trim();
    return el.name || el.id || '';
  }

  function detectType(el) {
    if (el.tagName === 'TEXTAREA') return null;
    var ac = (el.getAttribute('autocomplete') || '').toLowerCase();
    var im = (el.getAttribute('inputmode') || '').toLowerCase();
    if (el.type === 'email' || ac.indexOf('email') > -1) return 'email';
    if (el.type === 'tel' || im === 'tel' || ac.indexOf('tel') > -1) return 'phone';
    var h = [el.name, el.id, el.placeholder,
      el.labels && el.labels[0] ? el.labels[0].textContent : ''].join(' ').toLowerCase();
    if (/e[\-_]?mail/.test(h)) return 'email';
    if (/phone|mobile|whats\s?app|cell|telephone|\btel\b|contact[ _\-]?(no\b|num)/.test(h)) return 'phone';
    if (/name/.test(h)) return 'name';
    return null;
  }

  // Phone-shaped value: 8-15 digits, only phone punctuation, not a date
  function looksLikePhone(v) {
    v = v.trim();
    if (!/^[+()\d\s\-\.]{7,24}$/.test(v)) return false;
    if (/^\d{1,2}[\-\.]\d{1,2}[\-\.]\d{2,4}$/.test(v)) return false;
    var digits = v.replace(/\D/g, '');
    return digits.length >= 8 && digits.length <= 15;
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
    // Fallback: unrecognized phone field (e.g. unnamed input in a phone
    // widget) — promote the first phone-shaped custom value to phone.
    if (!data.phone) {
      Object.keys(custom).some(function(k) {
        if (looksLikePhone(custom[k])) {
          data.phone = custom[k].trim();
          delete custom[k];
          return true;
        }
        return false;
      });
    }
    if (Object.keys(custom).length > 0) data.custom_fields = custom;
    return data;
  }

  // Journey signals — let the CRM tell which website journey this form belongs
  // to (e.g. hotels vs flights). Explicit data-leadnudge tag wins; the CRM also
  // matches on form id / action / page path via configured rules.
  function journeySignals(form) {
    var meta = {};
    if (!form) return meta;
    var tag = form.getAttribute('data-leadnudge');
    if (tag && tag.trim()) meta.journey_tag = tag.trim();
    if (form.id) meta.form_id = form.id;
    var action = form.getAttribute('action');
    if (action) meta.form_action = action;
    return meta;
  }

  function sendLead(formData, form) {
    if (!formData.email && !formData.phone) return;
    var payload = Object.assign({}, captureParams(), formData, journeySignals(form), {
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
    sendLead(extractForm(form), form);
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
