# indian-pincode 🇮🇳

> Lightweight, zero-dependency utility for validating and looking up real Indian PIN codes — with state, district, and post office data.

[![npm version](https://img.shields.io/npm/v/indian-pincode.svg)](https://www.npmjs.com/package/indian-pincode)
[![license](https://img.shields.io/npm/l/indian-pincode.svg)](LICENSE)

---

## ✨ Features

- ✅ **Format validation** — check if a PIN code has valid format
- 🔍 **Existence check** — verify if a PIN code actually exists (dataset-backed)
- 🏛️ **State lookup** — get the state from a PIN code
- 🏘️ **District lookup** — get the district from a PIN code
- 📮 **Post office lookup** — get the post office name
- 📋 **Full details** — get all info in one call
- 🔒 **Mask PIN codes** — hide last 3 digits for privacy
- ⚡ **Zero dependencies** — fast and lightweight
- 📦 **230+ PIN codes** included, structured for easy expansion to 19,000+

---

## 📦 Installation

```bash
npm install indian-pincode
```

---

## 🚀 Quick Start

```js
const pin = require("indian-pincode");

pin.isValidFormat("140001");   // true
pin.exists("140001");          // true
pin.getState("140001");        // "Punjab"
pin.getDistrict("140001");     // "Rupnagar"
pin.getPostOffice("140001");   // "Rupnagar HO"
pin.getDetails("140001");      // { pincode, state, district, postOffice }
pin.maskPincode("140001");     // "140***"
```

---

## 📖 API Reference

### `isValidFormat(pincode)`

Validates PIN code format (6 digits, first digit ≠ 0).

```js
isValidFormat("140001"); // true
isValidFormat("012345"); // false — starts with 0
isValidFormat("12345");  // false — only 5 digits
```

**Returns:** `boolean`

---

### `exists(pincode)`

Checks if a PIN code exists in the dataset.

```js
exists("140001"); // true
exists("140000"); // false
```

**Returns:** `boolean`

---

### `getState(pincode)`

Returns the state for a PIN code.

```js
getState("140001"); // "Punjab"
getState("110001"); // "Delhi"
getState("400001"); // "Maharashtra"
```

**Returns:** `string | null`

---

### `getDistrict(pincode)`

Returns the district for a PIN code.

```js
getDistrict("140001"); // "Rupnagar"
getDistrict("411001"); // "Pune"
```

**Returns:** `string | null`

---

### `getPostOffice(pincode)`

Returns the post office name for a PIN code.

```js
getPostOffice("140001"); // "Rupnagar HO"
getPostOffice("110001"); // "New Delhi GPO"
```

**Returns:** `string | null`

---

### `getDetails(pincode)`

Returns full details for a PIN code.

```js
getDetails("140001");
// {
//   pincode: "140001",
//   state: "Punjab",
//   district: "Rupnagar",
//   postOffice: "Rupnagar HO"
// }
```

**Returns:** `object | null`

---

### `maskPincode(pincode)`

Masks the last 3 digits for privacy.

```js
maskPincode("140001"); // "140***"
maskPincode("400001"); // "400***"
```

**Returns:** `string | null`

---

## 🗂️ Project Structure

```
indian-pincode/
├── package.json
├── index.js
├── README.md
├── LICENSE
├── example.js
├── test.js
└── src/
    ├── validate.js
    ├── lookup.js
    ├── mask.js
    └── data/
        └── pincodes.json
```

---

## 🧪 Running Tests

```bash
npm test
```

## 💡 Running Examples

```bash
npm run example
```

---

## 📄 License

[MIT](LICENSE)
