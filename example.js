/**
 * example.js
 * Demonstrates all functions provided by the indian-pincode package.
 *
 * Run:  node example.js
 */

const pin = require("./index");

console.log("========================================");
console.log("   indian-pincode — Usage Examples");
console.log("========================================\n");

// ─── 1. Validate PIN Codes ──────────────────────────────────
console.log("1️⃣  Validate PIN Codes");
console.log("─────────────────────────────────────");

const testPins = ["110001", "012345", "12345", "abcdef", 400001, "", null];

testPins.forEach((p) => {
  const label = JSON.stringify(p).padEnd(12);
  console.log(`   isValidPincode(${label}) → ${pin.isValidPincode(p)}`);
});

console.log();

// ─── 2. Get Region ──────────────────────────────────────────
console.log("2️⃣  Get Region");
console.log("─────────────────────────────────────");

const regionPins = [
  "110001",
  "226001",
  "302001",
  "400001",
  "560001",
  "600001",
  "700001",
  "800001",
  "900001",
];

regionPins.forEach((p) => {
  console.log(`   getRegion("${p}") → ${pin.getRegion(p)}`);
});

console.log();

// ─── 3. Get Zone ────────────────────────────────────────────
console.log("3️⃣  Get Zone (City)");
console.log("─────────────────────────────────────");

const zonePins = ["110001", "400001", "560001", "600001", "700001", "999999"];

zonePins.forEach((p) => {
  console.log(`   getZone("${p}") → ${pin.getZone(p)}`);
});

console.log();

// ─── 4. Mask PIN Code ───────────────────────────────────────
console.log("4️⃣  Mask PIN Code");
console.log("─────────────────────────────────────");

const maskPins = ["110001", "400001", "560001", "12345"];

maskPins.forEach((p) => {
  const label = JSON.stringify(p).padEnd(12);
  console.log(`   maskPincode(${label}) → ${pin.maskPincode(p)}`);
});

console.log("\n========================================");
console.log("   All examples executed successfully!");
console.log("========================================\n");
