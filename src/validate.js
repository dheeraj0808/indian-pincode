/**
 * validate.js
 * Format validation for Indian PIN codes (Postal Index Numbers).
 *
 * Rules:
 *   - Exactly 6 digits
 *   - Must be numeric
 *   - First digit cannot be 0
 */

/**
 * Checks whether a value has a valid Indian PIN code format.
 *
 * @param {string|number} pincode - The PIN code to validate.
 * @returns {boolean} `true` if format is valid, `false` otherwise.
 *
 * @example
 * isValidFormat("140001"); // true
 * isValidFormat("012345"); // false
 * isValidFormat("12345");  // false
 */
function isValidFormat(pincode) {
  const pin = String(pincode).trim();

  // ^[1-9]  → first digit must be 1–9
  // \d{5}$  → followed by exactly 5 digits
  return /^[1-9]\d{5}$/.test(pin);
}

module.exports = { isValidFormat };
