/**
 * validate.js
 * Validates Indian PIN codes (Postal Index Numbers).
 *
 * Indian PIN codes follow these rules:
 *   - Exactly 6 digits
 *   - Must be numeric (no letters or special characters)
 *   - First digit cannot be 0 (valid range: 1–9)
 */

/**
 * Checks whether a given value is a valid Indian PIN code.
 *
 * @param {string|number} pincode - The PIN code to validate.
 * @returns {boolean} `true` if the PIN code is valid, `false` otherwise.
 *
 * @example
 * isValidPincode("110001"); // true
 * isValidPincode("012345"); // false – starts with 0
 * isValidPincode("12345");  // false – only 5 digits
 * isValidPincode(110001);   // true  – numbers are accepted too
 */
function isValidPincode(pincode) {
  // Convert to string so that numeric inputs are handled gracefully
  const pin = String(pincode).trim();

  // Regular expression breakdown:
  //   ^        – start of string
  //   [1-9]    – first digit must be 1–9 (not 0)
  //   \d{5}    – followed by exactly 5 more digits (0–9)
  //   $        – end of string
  const pattern = /^[1-9]\d{5}$/;

  return pattern.test(pin);
}

module.exports = { isValidPincode };
