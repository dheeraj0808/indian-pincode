/**
 * lookup.js
 * PIN code lookup utilities powered by a real dataset.
 *
 * Provides functions to check existence and retrieve
 * state, district, post office, and full details.
 */

const { isValidFormat } = require("./validate");
const pincodes = require("./data/pincodes.json");

/**
 * Checks if a PIN code exists in the dataset.
 *
 * @param {string|number} pincode
 * @returns {boolean}
 *
 * @example
 * exists("140001"); // true
 * exists("140000"); // false
 */
function exists(pincode) {
  if (!isValidFormat(pincode)) return false;
  return pincodes.hasOwnProperty(String(pincode).trim());
}

/**
 * Returns the state for a given PIN code.
 *
 * @param {string|number} pincode
 * @returns {string|null} State name, or `null` if not found.
 *
 * @example
 * getState("140001"); // "Punjab"
 */
function getState(pincode) {
  if (!isValidFormat(pincode)) return null;
  const entry = pincodes[String(pincode).trim()];
  return entry ? entry.state : null;
}

/**
 * Returns the district for a given PIN code.
 *
 * @param {string|number} pincode
 * @returns {string|null} District name, or `null` if not found.
 *
 * @example
 * getDistrict("140001"); // "Rupnagar"
 */
function getDistrict(pincode) {
  if (!isValidFormat(pincode)) return null;
  const entry = pincodes[String(pincode).trim()];
  return entry ? entry.district : null;
}

/**
 * Returns the post office name for a given PIN code.
 *
 * @param {string|number} pincode
 * @returns {string|null} Post office name, or `null` if not found.
 *
 * @example
 * getPostOffice("140001"); // "Rupnagar HO"
 */
function getPostOffice(pincode) {
  if (!isValidFormat(pincode)) return null;
  const entry = pincodes[String(pincode).trim()];
  return entry ? entry.postOffice : null;
}

/**
 * Returns full details for a PIN code.
 *
 * @param {string|number} pincode
 * @returns {object|null} Details object, or `null` if not found.
 *
 * @example
 * getDetails("140001");
 * // { pincode: "140001", state: "Punjab", district: "Rupnagar", postOffice: "Rupnagar HO" }
 */
function getDetails(pincode) {
  if (!isValidFormat(pincode)) return null;
  const pin = String(pincode).trim();
  const entry = pincodes[pin];
  if (!entry) return null;

  return {
    pincode: pin,
    state: entry.state,
    district: entry.district,
    postOffice: entry.postOffice,
  };
}

module.exports = { exists, getState, getDistrict, getPostOffice, getDetails };
