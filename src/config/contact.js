
// =========================================
// SITE CONTACT SETTINGS
// Asli number sirf yahin badlo. Navbar, Footer aur About, sab yahin se lenge.
// Format: country code + number, bina + ya space ke. Example: India = 91XXXXXXXXXX
// =========================================

export const WHATSAPP_NUMBER = "919876543210"; // TODO: apna asli number daalo

export const whatsappLink = (
  message = "Hello WEB_MAKER, I would like to know more about your services."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// =========================================
// BUSINESS LOCATION (Contact form ke map ke liye)
// =========================================

// TODO: apna poora asli address daalo (shop/office number, area, city, state, pincode)
export const BUSINESS_ADDRESS = "Your Business Address, City, State, Pincode";

// Short label jo map ke card par dikhega
export const BUSINESS_NAME = "WEB_MAKER";

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