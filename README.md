# 🖼 JavaScript Certificate Maker

<p align="center">
  <a href="https://github.com/antoniodecanini">
    <img alt="Made by Antonio Decanini" src="https://img.shields.io/badge/made%20by-Antonio%20Decanini-brightgreen">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

This is a package to create certificates automatically from a list of names. You should to create a certificate basis, where the names will be placed. Then from a list of participants, the package generate the certificates, with their names.

<p align="center">
  <img src="https://res.cloudinary.com/decanini/image/upload/v1587219960/certificate.png" width="450">

  <img src="https://res.cloudinary.com/decanini/image/upload/v1587301422/Alexia_Ridley_badtmb.png" width="450">
</p>

---

## 🚀 Getting Started

### Prerequisites
- To use this package, you must have an account in [cloudinary](https://cloudinary.com/) to use their api.

- Have a basis for the certificate, leaving it blank, just where the person’s name will go.

### Step 1
- 👯 Clone this repo to your local machine and install dependencies
```
$ git clone https://github.com/antoniodecanini/js-certificate-maker-cloudinary.git

$ cd js-certificate-maker-cloudinary

$ npm install
```

### Step 2
- ⚙️ Make the settings
  - In `src/configs.json`, you will find the initial config
    - Fill the `cloudinaryConfig` with your cloudinary settings, found on your cloudinary dashboard.

    - On `uploadConfig.imageName`, put the name of file containing certificate basis. This file must be placed in `public/img`.
    
    - On `uploadConfig.publicId`, put the name tht will be saved in your cloudinary.

    - On `createConfig`, you can configure the appearence of the text, and the position it should be in the certificate.

### Step 3
- 👨‍🎓 People's name
  - Fill the people's name in `public/names.json`.

### Step 4
- ⬆️ Up the certificate basis
```
$ npm upload
```

### Step 5
- ⬇️ Generate an download certificates
```
$npm start
```

#### ✨ Ooooh! Your certificates are ready in `public/certificates`
---

## 📋 Features

### Build with

- Core
  - [node.js](https://nodejs.org/en/) - a JavaScript runtime built on Chrome's V8 JavaScript engine.

  - [cloudinary](https://cloudinary.com/) - a lib for efficiently manage, optimize, and deliver images, videos and other media across every device and channel.

---

## 📝 License

<img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ Enjoy it!