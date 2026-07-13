// Central place for contact details and compliance numbers.
// Everything marked PLACEHOLDER must be confirmed with RAF before go-live.

export const site = {
  brand: "RAF Real Estate",
  phoneDisplay: "+971 52 836 1591",
  phoneTel: "+971528361591",
  whatsapp: "https://wa.me/971528361591",
  dldLicence: "DLD Licence No. 1180305",
  reraOrn: "RERA ORN 47185",
  // GBP conversions across all pages use this rate. Update on publish.
  fxNote: "GBP figures convert at AED 4.70 to £1, the rate at July 2026, and are rounded. Confirm the live rate on the day you transact.",
};

// POST target for lead forms. Wire to LeadNudge webhook / form endpoint.
export const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "";
