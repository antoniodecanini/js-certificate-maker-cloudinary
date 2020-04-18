const fs = require('fs');
const http = require('http');
const { names } = require('../public/names.json');

/* This function download each image to certificates folder with filename equals name in array*/
module.exports = function downloadCertificates(urls) {
  for(url in urls) {
    const file = fs.createWriteStream(`./public/certificates/${names[url]}.png`);
    const request = http.get(urls[url], (res) => {
      res.pipe(file)
    })
  }
}