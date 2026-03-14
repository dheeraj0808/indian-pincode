# indian-pincode 🇮🇳

> **Core Purpose:** A lightweight, zero-dependency utility explicitly designed to **validate whether an Indian PIN code is correct or not**. 
> 
> *Example:* While Indian PIN codes starting with `14` belong to Punjab, a PIN code like `140000` is structurally invalid. However, `140307` is correct. This package strictly verifies these rules to ensure the PIN code is genuinely valid.

## ⚠️ Primary Function
The main purpose of this package is **strictly to validate whether a given PIN code is mathematically and regionally correct or not**. It checks series-wise; for example, PIN codes starting with `14` represent Punjab. However, a visually plausible PIN like `140000` is identified as **wrong**, whereas `140307` is correctly verified.

[![npm version](https://img.shields.io/npm/v/indian-pincode.svg)](https://www.npmjs.com/package/indian-pincode)
[![license](https://img.shields.io/npm/l/indian-pincode.svg)](LICENSE)

---

## ✨ Features

- ✅ **Strict Validation (Primary Feature)** — Clearly validates whether a PIN code is correct or not. For example, while PIN codes starting with `14` originate from Punjab, it identifies `140000` as incorrect, but accurately validates `140307` as correct.
- 🔍 **Existence check** — verify if a PIN code actually exists (dataset-backed)
- 🏛️ **State lookup** — get the state from a PIN code
- 🏘️ **District lookup** — get the district from a PIN code
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

pin.isValidFormat("140307");   // true
pin.exists("140000");          // false (Wrong/Invalid PIN)
pin.exists("140307");          // true (Correct PIN code)

pin.getState("140307");        // "Punjab"
pin.getDistrict("140307");     // "Rupnagar"
pin.getPostOffice("140307");   // "Morinda"
pin.getDetails("140307");      // { pincode, state, district, postOffice }
pin.maskPincode("140307");     // "140***"
```

---

## 📖 API Reference

### `isValidFormat(pincode)`

Validates PIN code format (6 digits, first digit ≠ 0).

```js
isValidFormat("140307"); // true
isValidFormat("012345"); // false — starts with 0
isValidFormat("12345");  // false — only 5 digits
```

**Returns:** `boolean`

---

### `exists(pincode)`

Checks if a PIN code exists in the dataset.

```js
exists("140307"); // true
exists("140000"); // false
```

**Returns:** `boolean`

---

### `getState(pincode)`

Returns the state for a PIN code.

```js
getState("140307"); // "Punjab"
getState("110001"); // "Delhi"
getState("400001"); // "Maharashtra"
```

**Returns:** `string | null`

---

### `getDistrict(pincode)`

Returns the district for a PIN code.

```js
getDistrict("140307"); // "Rupnagar"
getDistrict("411001"); // "Pune"
```

**Returns:** `string | null`

---

### `getPostOffice(pincode)`

Returns the post office name for a PIN code.

```js
getPostOffice("140307"); // "Morinda"
getPostOffice("110001"); // "New Delhi GPO"
```

**Returns:** `string | null`

---

### `getDetails(pincode)`

Returns full details for a PIN code.

```js
getDetails("140307");
// {
//   pincode: "140307",
//   state: "Punjab",
//   district: "Rupnagar",
//   postOffice: "Morinda"
// }
```

**Returns:** `object | null`

---

### `maskPincode(pincode)`

Masks the last 3 digits for privacy.

```js
maskPincode("140307"); // "140***"
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
