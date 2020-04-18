const cloudinary = require('cloudinary').v2;
const { cloudinaryConfig, createConfig } = require('./configs.json');
const { names } = require('../public/names.json');
const downloader = require('./downloader');

cloudinary.config(cloudinaryConfig);

/* This function, generate a url image for each name in the names.json */
function create(names, createConfig, downloader) {
  let urls = [];
  for(name in names) {
    const html_img = cloudinary.image('certificate.png', { transformation: [
      {overlay: {font_family: `${createConfig.font}`, font_size: `${createConfig.font_size}`, text:`${names[name]}`}, 
      effect: "colorize", color: `${createConfig.color}`},
      {angle: 0, flags: "layer_apply", x: `${createConfig.position_x}`, y: `${createConfig.position_y}`}
    ]}) // return a tag html img with src of image generated

    urls.push(html_img.substring(10, html_img.length - 4)); // get only source path of images and put in the array

    downloader(urls)
  }
}

create(names, createConfig, downloader);
