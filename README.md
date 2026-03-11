# indian-pincode 🇮🇳

> Lightweight, zero-dependency utility library for validating and working with Indian PIN codes (Postal Index Numbers).

[![npm version](https://img.shields.io/npm/v/indian-pincode.svg)](https://www.npmjs.com/package/indian-pincode)
[![license](https://img.shields.io/npm/l/indian-pincode.svg)](https://github.com/your-repo/indian-pincode/blob/main/LICENSE)

---

## ✨ Features

- ✅ **Validate** Indian PIN codes
- 🗺️ **Identify the region** (North, South, East, West, Army Postal Service)
- 🏙️ **Look up the postal zone** (city) from a PIN code
- 🔒 **Mask PIN codes** for privacy
- ⚡ **Zero dependencies** — fast and lightweight
- 🧩 **CommonJS compatible** — works with `require()`

---

## 📦 Installation

```bash
npm install indian-pincode
```

---

## 🚀 Quick Start

```js
const pin = require("indian-pincode");

// Validate a PIN code
pin.isValidPincode("110001"); // true
pin.isValidPincode("012345"); // false

// Get the postal region
pin.getRegion("110001"); // "North"
pin.getRegion("400001"); // "West"

// Get the postal zone (city)
pin.getZone("110001"); // "Delhi"
pin.getZone("400001"); // "Mumbai"

// Mask a PIN code for privacy
pin.maskPincode("110001"); // "110***"
```

---

## 📖 API Reference

### `isValidPincode(pincode)`

Validates whether a value is a valid Indian PIN code.

| Parameter | Type               | Description          |
| --------- | ------------------ | -------------------- |
| `pincode` | `string \| number` | The PIN code to check |

**Returns:** `boolean`

**Validation Rules:**
- Must be exactly 6 digits
- Must be numeric
- First digit cannot be `0`

```js
isValidPincode("110001"); // true
isValidPincode("012345"); // false  — starts with 0
isValidPincode("12345");  // false  — only 5 digits
isValidPincode(400001);   // true   — numbers accepted
isValidPincode("abcdef"); // false  — not numeric
```

---

### `getRegion(pincode)`

Returns the postal region based on the first digit of the PIN code.

| Parameter | Type               | Description          |
| --------- | ------------------ | -------------------- |
| `pincode` | `string \| number` | A valid PIN code      |

**Returns:** `string | null` — Region name, or `null` if invalid.

**Region Mapping:**

| First Digit | Region               |
| ----------- | -------------------- |
| 1           | North                |
| 2           | North                |
| 3           | West                 |
| 4           | West                 |
| 5           | South                |
| 6           | South                |
| 7           | East                 |
| 8           | East                 |
| 9           | Army Postal Service  |

```js
getRegion("110001"); // "North"
getRegion("560001"); // "South"
getRegion("700001"); // "East"
getRegion("900001"); // "Army Postal Service"
```

---

### `getZone(pincode)`

Returns the postal zone (city/area) for a known PIN code.

| Parameter | Type               | Description          |
| --------- | ------------------ | -------------------- |
| `pincode` | `string \| number` | A valid PIN code      |

**Returns:** `string` — City/area name, or `"Unknown"` if not in the dataset.

**Included Cities:**
Delhi, Mumbai, Pune, Bangalore, Chennai, Hyderabad, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Bhopal, Indore, Patna, Ranchi, Guwahati, Kochi, Thiruvananthapuram, and more.

```js
getZone("110001"); // "Delhi"
getZone("400001"); // "Mumbai"
getZone("560001"); // "Bangalore"
getZone("999999"); // "Unknown"
```

---

### `maskPincode(pincode)`

Masks the last 3 digits of a PIN code with asterisks for privacy.

| Parameter | Type               | Description          |
| --------- | ------------------ | -------------------- |
| `pincode` | `string \| number` | A valid PIN code      |

**Returns:** `string | null` — Masked PIN code, or `null` if invalid.

```js
maskPincode("110001"); // "110***"
maskPincode("400001"); // "400***"
maskPincode("12345");  // null — invalid
```

---

## 🗂️ Project Structure

```
indian-pincode/
├── package.json       # npm package manifest
├── index.js           # Main entry point (exports all functions)
├── README.md          # Documentation
├── LICENSE            # MIT License
├── example.js         # Usage examples
├── test.js            # Test suite
├── .gitignore
├── .npmignore
└── src/
    ├── validate.js    # isValidPincode()
    ├── region.js      # getRegion()
    ├── zone.js        # getZone()
    └── mask.js        # maskPincode()
```

---

## 🧪 Running Tests

```bash
npm test
```

---

## 💡 Running Examples

```bash
npm run example
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Show Your Support

If this package helped you, give it a ⭐ on GitHub!
# indian-pincode
