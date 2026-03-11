/**
 * example.js — Demonstrates all indian-pincode functions.
 * Run:  node example.js
 */

const pin = require("./index");

console.log("==========================================");
console.log("   indian-pincode — Usage Examples");
console.log("==========================================\n");

// 1. Format Validation
console.log("1️⃣  Format Validation");
console.log("──────────────────────────────────────────");
["140001", "012345", "12345", "abcdef", 110001, null].forEach((p) => {
  console.log(`   isValidFormat(${JSON.stringify(p).padEnd(12)}) → ${pin.isValidFormat(p)}`);
});

// 2. Existence Check
console.log("\n2️⃣  Existence Check (dataset lookup)");
console.log("──────────────────────────────────────────");
["140001", "140000", "110001", "999999"].forEach((p) => {
  console.log(`   exists("${p}") → ${pin.exists(p)}`);
});

// 3. Get State
console.log("\n3️⃣  Get State");
console.log("──────────────────────────────────────────");
["140001", "400001", "560001", "700001"].forEach((p) => {
  console.log(`   getState("${p}") → ${pin.getState(p)}`);
});

// 4. Get District
console.log("\n4️⃣  Get District");
console.log("──────────────────────────────────────────");
["140001", "411001", "600001", "834001"].forEach((p) => {
  console.log(`   getDistrict("${p}") → ${pin.getDistrict(p)}`);
});

// 5. Get Post Office
console.log("\n5️⃣  Get Post Office");
console.log("──────────────────────────────────────────");
["140001", "110001", "500001", "682001"].forEach((p) => {
  console.log(`   getPostOffice("${p}") → ${pin.getPostOffice(p)}`);
});

// 6. Get Full Details
console.log("\n6️⃣  Get Full Details");
console.log("──────────────────────────────────────────");
["140001", "560034", "999999"].forEach((p) => {
  console.log(`   getDetails("${p}") →`, pin.getDetails(p));
});

// 7. Mask PIN Code
console.log("\n7️⃣  Mask PIN Code");
console.log("──────────────────────────────────────────");
["140001", "400001", "12345"].forEach((p) => {
  console.log(`   maskPincode(${JSON.stringify(p).padEnd(10)}) → ${pin.maskPincode(p)}`);
});

console.log("\n==========================================");
console.log("   All examples executed successfully! ✅");
console.log("==========================================\n");
