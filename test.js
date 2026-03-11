/**
 * test.js — Zero-dependency test suite for indian-pincode.
 * Run:  node test.js
 */

const assert = require("assert");
const {
  isValidFormat, exists, getState, getDistrict,
  getPostOffice, getDetails, maskPincode,
} = require("./index");

let passed = 0, failed = 0;

function test(desc, fn) {
  try { fn(); passed++; console.log(`  ✅  ${desc}`); }
  catch (e) { failed++; console.log(`  ❌  ${desc}\n      ${e.message}`); }
}

console.log("\n🧪  Running tests for indian-pincode\n");

// ── isValidFormat ───────────────────────────────
console.log("── isValidFormat ──");
test("valid: 140001", () => assert.strictEqual(isValidFormat("140001"), true));
test("valid: number 110001", () => assert.strictEqual(isValidFormat(110001), true));
test("invalid: starts with 0", () => assert.strictEqual(isValidFormat("012345"), false));
test("invalid: 5 digits", () => assert.strictEqual(isValidFormat("12345"), false));
test("invalid: 7 digits", () => assert.strictEqual(isValidFormat("1234567"), false));
test("invalid: letters", () => assert.strictEqual(isValidFormat("abcdef"), false));
test("invalid: null", () => assert.strictEqual(isValidFormat(null), false));
test("invalid: undefined", () => assert.strictEqual(isValidFormat(undefined), false));
test("invalid: empty", () => assert.strictEqual(isValidFormat(""), false));

// ── exists ──────────────────────────────────────
console.log("\n── exists ──");
test("140001 exists", () => assert.strictEqual(exists("140001"), true));
test("110001 exists", () => assert.strictEqual(exists("110001"), true));
test("400001 exists", () => assert.strictEqual(exists("400001"), true));
test("140000 does not exist", () => assert.strictEqual(exists("140000"), false));
test("999999 does not exist", () => assert.strictEqual(exists("999999"), false));
test("invalid format", () => assert.strictEqual(exists("abc"), false));

// ── getState ────────────────────────────────────
console.log("\n── getState ──");
test("140001 → Punjab", () => assert.strictEqual(getState("140001"), "Punjab"));
test("110001 → Delhi", () => assert.strictEqual(getState("110001"), "Delhi"));
test("400001 → Maharashtra", () => assert.strictEqual(getState("400001"), "Maharashtra"));
test("560001 → Karnataka", () => assert.strictEqual(getState("560001"), "Karnataka"));
test("600001 → Tamil Nadu", () => assert.strictEqual(getState("600001"), "Tamil Nadu"));
test("695001 → Kerala", () => assert.strictEqual(getState("695001"), "Kerala"));
test("700001 → West Bengal", () => assert.strictEqual(getState("700001"), "West Bengal"));
test("800001 → Bihar", () => assert.strictEqual(getState("800001"), "Bihar"));
test("unknown → null", () => assert.strictEqual(getState("999999"), null));
test("invalid → null", () => assert.strictEqual(getState("abc"), null));

// ── getDistrict ─────────────────────────────────
console.log("\n── getDistrict ──");
test("140001 → Rupnagar", () => assert.strictEqual(getDistrict("140001"), "Rupnagar"));
test("411001 → Pune", () => assert.strictEqual(getDistrict("411001"), "Pune"));
test("unknown → null", () => assert.strictEqual(getDistrict("999999"), null));

// ── getPostOffice ───────────────────────────────
console.log("\n── getPostOffice ──");
test("140001 → Rupnagar HO", () => assert.strictEqual(getPostOffice("140001"), "Rupnagar HO"));
test("110001 → New Delhi GPO", () => assert.strictEqual(getPostOffice("110001"), "New Delhi GPO"));
test("unknown → null", () => assert.strictEqual(getPostOffice("999999"), null));

// ── getDetails ──────────────────────────────────
console.log("\n── getDetails ──");
test("140001 full details", () => {
  const d = getDetails("140001");
  assert.deepStrictEqual(d, {
    pincode: "140001", state: "Punjab",
    district: "Rupnagar", postOffice: "Rupnagar HO",
  });
});
test("unknown → null", () => assert.strictEqual(getDetails("999999"), null));
test("invalid → null", () => assert.strictEqual(getDetails("abc"), null));

// ── maskPincode ─────────────────────────────────
console.log("\n── maskPincode ──");
test('140001 → "140***"', () => assert.strictEqual(maskPincode("140001"), "140***"));
test('400001 → "400***"', () => assert.strictEqual(maskPincode("400001"), "400***"));
test("invalid → null", () => assert.strictEqual(maskPincode("12345"), null));

// ── Summary ─────────────────────────────────────
console.log(`\n──────────────────────────────────────`);
console.log(`  Results: ${passed} passed, ${failed} failed`);
console.log(`──────────────────────────────────────\n`);
if (failed > 0) process.exit(1);
