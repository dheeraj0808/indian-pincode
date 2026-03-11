/**
 * mask.js
 * Masks Indian PIN codes for privacy purposes.
 *
 * Useful when displaying PIN codes in logs, receipts, or UIs where
 * the full postal code should not be visible.
 */

const { isValidPincode } = require("./validate");

/**
 * Masks the last 3 digits of an Indian PIN code with asterisks.
 *
 * @param {string|number} pincode - A valid 6-digit Indian PIN code.
 * @returns {string|null} The masked PIN code (e.g. "110***"), or `null` if invalid.
 *
 * @example
 * maskPincode("110001"); // "110***"
 * maskPincode("400001"); // "400***"
 * maskPincode("12345");  // null – invalid PIN code
 */
function maskPincode(pincode) {
  // Validate before processing
  if (!isValidPincode(pincode)) {
    return null;
  }

  const pin = String(pincode).trim();

  // Keep the first 3 digits visible and replace the rest with asterisks
  return pin.substring(0, 3) + "***";
}

module.exports = { maskPincode };
