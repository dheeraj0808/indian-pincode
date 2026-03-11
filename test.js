/**
 * test.js
 * Lightweight test suite for the indian-pincode package.
 * No external testing framework required — runs with plain Node.js.
 *
 * Run:  node test.js
 */

const assert = require("assert");
const { isValidPincode, getRegion, getZone, maskPincode } = require("./index");

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    passed++;
    console.log(`  ✅  ${description}`);
  } catch (err) {
    failed++;
    console.log(`  ❌  ${description}`);
    console.log(`      ${err.message}`);
  }
}

console.log("\n🧪  Running tests for indian-pincode\n");

// ─── isValidPincode ─────────────────────────────────────────
console.log("── isValidPincode ──");

test("valid: 110001", () => {
  assert.strictEqual(isValidPincode("110001"), true);
});

test("valid: 400001 (number input)", () => {
  assert.strictEqual(isValidPincode(400001), true);
});

test("valid: 560001", () => {
  assert.strictEqual(isValidPincode("560001"), true);
});

test("valid: 900001 (APS)", () => {
  assert.strictEqual(isValidPincode("900001"), true);
});

test("invalid: starts with 0", () => {
  assert.strictEqual(isValidPincode("012345"), false);
});

test("invalid: only 5 digits", () => {
  assert.strictEqual(isValidPincode("12345"), false);
});

test("invalid: 7 digits", () => {
  assert.strictEqual(isValidPincode("1234567"), false);
});

test("invalid: contains letters", () => {
  assert.strictEqual(isValidPincode("11000a"), false);
});

test("invalid: empty string", () => {
  assert.strictEqual(isValidPincode(""), false);
});

test("invalid: null", () => {
  assert.strictEqual(isValidPincode(null), false);
});

test("invalid: undefined", () => {
  assert.strictEqual(isValidPincode(undefined), false);
});

test("invalid: special characters", () => {
  assert.strictEqual(isValidPincode("110-01"), false);
});

console.log();

// ─── getRegion ──────────────────────────────────────────────
console.log("── getRegion ──");

test("110001 → North", () => {
  assert.strictEqual(getRegion("110001"), "North");
});

test("226001 → North", () => {
  assert.strictEqual(getRegion("226001"), "North");
});

test("302001 → West", () => {
  assert.strictEqual(getRegion("302001"), "West");
});

test("400001 → West", () => {
  assert.strictEqual(getRegion("400001"), "West");
});

test("560001 → South", () => {
  assert.strictEqual(getRegion("560001"), "South");
});

test("600001 → South", () => {
  assert.strictEqual(getRegion("600001"), "South");
});

test("700001 → East", () => {
  assert.strictEqual(getRegion("700001"), "East");
});

test("800001 → East", () => {
  assert.strictEqual(getRegion("800001"), "East");
});

test("900001 → Army Postal Service", () => {
  assert.strictEqual(getRegion("900001"), "Army Postal Service");
});

test("invalid PIN → null", () => {
  assert.strictEqual(getRegion("012345"), null);
});

console.log();

// ─── getZone ────────────────────────────────────────────────
console.log("── getZone ──");

test("110001 → Delhi", () => {
  assert.strictEqual(getZone("110001"), "Delhi");
});

test("400001 → Mumbai", () => {
  assert.strictEqual(getZone("400001"), "Mumbai");
});

test("560001 → Bangalore", () => {
  assert.strictEqual(getZone("560001"), "Bangalore");
});

test("600001 → Chennai", () => {
  assert.strictEqual(getZone("600001"), "Chennai");
});

test("700001 → Kolkata", () => {
  assert.strictEqual(getZone("700001"), "Kolkata");
});

test("999999 → Unknown", () => {
  assert.strictEqual(getZone("999999"), "Unknown");
});

test("invalid PIN → Unknown", () => {
  assert.strictEqual(getZone("abc"), "Unknown");
});

console.log();

// ─── maskPincode ────────────────────────────────────────────
console.log("── maskPincode ──");

test('110001 → "110***"', () => {
  assert.strictEqual(maskPincode("110001"), "110***");
});

test('400001 → "400***"', () => {
  assert.strictEqual(maskPincode("400001"), "400***");
});

test('560001 → "560***"', () => {
  assert.strictEqual(maskPincode("560001"), "560***");
});

test("invalid PIN → null", () => {
  assert.strictEqual(maskPincode("12345"), null);
});

test("numeric input 110001 → '110***'", () => {
  assert.strictEqual(maskPincode(110001), "110***");
});

// ─── Summary ────────────────────────────────────────────────
console.log("\n──────────────────────────────────────");
console.log(`  Results: ${passed} passed, ${failed} failed`);
console.log("──────────────────────────────────────\n");

if (failed > 0) {
  process.exit(1);
}
