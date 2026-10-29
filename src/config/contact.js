// =========================================
// SITE CONTACT SETTINGS
// Number ya naam badalna ho to sirf yahin badlo.
// Navbar, Footer, CTA, Floating button, Contact form, Pricing, sab yahin se lete hain.
// =========================================

// ---------- OWNER ----------
export const OWNER_NAME = "Mitul Panchal";
export const BUSINESS_NAME = "WEB_MAKER";

// ---------- WHATSAPP ----------
// wa.me ke liye country code (91) ke saath, bina + ya space ke
export const WHATSAPP_NUMBER = "917818966989";

// Screen par dikhane ke liye
export const WHATSAPP_DISPLAY = "+91 78189 66989";

export const DEFAULT_WHATSAPP_MESSAGE = `Hello ${OWNER_NAME}, I would like to know more about ${BUSINESS_NAME}'s services.`;

// Click-to-Chat link. Phone par WhatsApp app khulta hai, computer par WhatsApp Web.
export const whatsappLink = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Contact form ki details se WhatsApp enquiry message banata hai
export const buildEnquiryMessage = (data = {}) => {
  const rows = [
    ["Name", data.name],
    ["Business", data.businessName],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Service", data.service],
    ["Message", data.message],
  ]
    .filter(([, value]) => value && String(value).trim())
    .map(([label, value]) => `${label}: ${String(value).trim()}`);

  return [
    `Hello ${OWNER_NAME}, I have an enquiry from the ${BUSINESS_NAME} website.`,
    "",
    ...rows,
  ].join("\n");
};

// =========================================
// BUSINESS LOCATION (Contact form ke map ke liye)
// =========================================

// TODO: apna poora asli address daalo (shop/office number, area, city, state, pincode)
export const BUSINESS_ADDRESS = "Your Business Address, City, State, Pincode";

// OPTIONAL (zyada exact pin ke liye):
// Google Maps kholo -> apni jagah search karo -> Share -> "Embed a map" -> HTML copy karo
// aur usme se sirf src="..." ka link yahan paste karo. Khali chhodoge to upar wale address se map banega.
export const MAP_EMBED_SRC = "";

export const mapEmbedUrl =
  MAP_EMBED_SRC ||
  `https://www.google.com/maps?q=${encodeURIComponent(
    BUSINESS_ADDRESS
  )}&output=embed`;

// "Get directions" button ka link (Google Maps app / website me khulta hai)
export const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS_ADDRESS
)}`;
