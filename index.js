/**
 * indian-pincode
 * Lightweight utility library for validating and working with Indian PIN codes.
 *
 * Features:
 *   - Validate PIN codes
 *   - Identify the postal region (North, South, East, West, APS)
 *   - Look up the postal zone (city)
 *   - Mask PIN codes for privacy
 *
 * Zero dependencies. Works with Node.js 10+.
 */

const { isValidPincode } = require("./src/validate");
const { getRegion } = require("./src/region");
const { getZone } = require("./src/zone");
const { maskPincode } = require("./src/mask");

module.exports = {
  isValidPincode,
  getRegion,
  getZone,
  maskPincode,
};
