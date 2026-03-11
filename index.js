/**
 * indian-pincode
 * Lightweight utility library for validating and looking up Indian PIN codes.
 *
 * Uses a real dataset of Indian PIN codes for accurate lookups.
 * Zero dependencies. Works with Node.js 10+.
 */

const { isValidFormat } = require("./src/validate");
const { exists, getState, getDistrict, getPostOffice, getDetails } = require("./src/lookup");
const { maskPincode } = require("./src/mask");

module.exports = {
  isValidFormat,
  exists,
  getState,
  getDistrict,
  getPostOffice,
  getDetails,
  maskPincode,
};
