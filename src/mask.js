/**
 * mask.js
 * Masks Indian PIN codes for privacy.
 */

const { isValidFormat } = require("./validate");

/**
 * Masks the last 3 digits of an Indian PIN code with asterisks.
 *
 * @param {string|number} pincode
 * @returns {string|null} Masked PIN (e.g. "140***"), or `null` if invalid.
 *
 * @example
 * maskPincode("140001"); // "140***"
 */
function maskPincode(pincode) {
  if (!isValidFormat(pincode)) return null;
  return String(pincode).trim().substring(0, 3) + "***";
}

module.exports = { maskPincode };
