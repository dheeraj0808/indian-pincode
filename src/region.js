/**
 * region.js
 * Determines the postal region of India from a PIN code's first digit.
 *
 * India Post divides the country into 9 postal zones.
 * The first digit of a PIN code indicates the broad geographic region:
 *
 *   1 → North       (Delhi, Haryana, HP, J&K, Punjab, etc.)
 *   2 → North       (UP, Uttarakhand)
 *   3 → West        (Rajasthan, Gujarat)
 *   4 → West        (Maharashtra, Goa, MP, Chhattisgarh)
 *   5 → South       (Andhra Pradesh, Telangana, Karnataka)
 *   6 → South       (Kerala, Tamil Nadu)
 *   7 → East        (West Bengal, Odisha, NE states)
 *   8 → East        (Bihar, Jharkhand)
 *   9 → Army Postal Service (APO / FPO)
 */

const { isValidPincode } = require("./validate");

// Lookup table mapping the first digit to its region
const REGION_MAP = {
  1: "North",
  2: "North",
  3: "West",
  4: "West",
  5: "South",
  6: "South",
  7: "East",
  8: "East",
  9: "Army Postal Service",
};

/**
 * Returns the postal region for a given Indian PIN code.
 *
 * @param {string|number} pincode - A valid 6-digit Indian PIN code.
 * @returns {string|null} The region name, or `null` if the PIN code is invalid.
 *
 * @example
 * getRegion("110001"); // "North"
 * getRegion("400001"); // "West"
 * getRegion("900001"); // "Army Postal Service"
 * getRegion("000001"); // null  – invalid PIN code
 */
function getRegion(pincode) {
  // Validate before processing
  if (!isValidPincode(pincode)) {
    return null;
  }

  const firstDigit = String(pincode).trim().charAt(0);
  return REGION_MAP[firstDigit] || null;
}

module.exports = { getRegion };
