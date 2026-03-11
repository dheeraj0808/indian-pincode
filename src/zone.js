/**
 * zone.js
 * Maps well-known Indian PIN codes to their postal zone (city/area name).
 *
 * This module ships with a curated set of major PIN codes for demonstration.
 * You can extend the ZONE_MAP object with additional entries as needed.
 */

const { isValidPincode } = require("./validate");

// Internal dataset of PIN code → zone (city) mappings
const ZONE_MAP = {
  // North India
  "110001": "Delhi",
  "110002": "Delhi",
  "110003": "Delhi",
  "160001": "Chandigarh",
  "141001": "Ludhiana",
  "180001": "Jammu",
  "226001": "Lucknow",
  "211001": "Allahabad",
  "208001": "Kanpur",
  "282001": "Agra",

  // West India
  "400001": "Mumbai",
  "400002": "Mumbai",
  "411001": "Pune",
  "380001": "Ahmedabad",
  "302001": "Jaipur",
  "452001": "Indore",
  "462001": "Bhopal",
  "403001": "Goa",

  // South India
  "560001": "Bangalore",
  "560002": "Bangalore",
  "600001": "Chennai",
  "600002": "Chennai",
  "500001": "Hyderabad",
  "695001": "Thiruvananthapuram",
  "682001": "Kochi",
  "520001": "Vijayawada",
  "530001": "Visakhapatnam",

  // East India
  "700001": "Kolkata",
  "700002": "Kolkata",
  "751001": "Bhubaneswar",
  "800001": "Patna",
  "834001": "Ranchi",
  "781001": "Guwahati",
  "737101": "Gangtok",

  // Other major cities
  "201001": "Ghaziabad",
  "250001": "Meerut",
  "248001": "Dehradun",
};

/**
 * Returns the postal zone (city/area) for a given Indian PIN code.
 *
 * @param {string|number} pincode - A valid 6-digit Indian PIN code.
 * @returns {string} The zone/city name, or "Unknown" if not found in the dataset.
 *
 * @example
 * getZone("110001"); // "Delhi"
 * getZone("400001"); // "Mumbai"
 * getZone("999999"); // "Unknown"
 */
function getZone(pincode) {
  // Validate before processing
  if (!isValidPincode(pincode)) {
    return "Unknown";
  }

  const pin = String(pincode).trim();
  return ZONE_MAP[pin] || "Unknown";
}

module.exports = { getZone };
