const cloudinary = require('cloudinary').v2;
const { cloudinaryConfig, uploadConfig } = require('./configs.json');

cloudinary.config(cloudinaryConfig);

/* Function to upload the certificate base */
function upload(uploadConfig) {
  cloudinary.uploader.upload(`public/img/${uploadConfig.imageName}`, 
    { public_id: `${uploadConfig.publicId}` }, 
    (err, result) => {
      if(err) throw `Error! *${err}`;
    })
}

upload(uploadConfig);