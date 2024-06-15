const { dirname } = require("node:path");
const rootDir = dirname(process.argv[1]);
const config = require("../config");
const { ImageModel } = require("../models");

function uploadMultipleFiles(uploadedFiles, userId) {
  const user_id = parseInt(userId);
  if (!user_id || isNaN(user_id)) {
    return Promise.reject("Undefined user Id.");
  }
  if (
    !uploadedFiles ||
    (Array.isArray(uploadedFiles) && uploadedFiles.length <= 0)
  ) {
    return Promise.reject("No file uploaded.");
  }
  if (!Array.isArray(uploadedFiles)) {
    uploadedFiles = [uploadedFiles];
  }
  const imagePath = rootDir + config.IMAGE_STORAGE;
  const handleUploadMultiFiles = uploadedFiles.map(
    (uploadedFile) =>
      new Promise((resolve) => {
        uploadedFile.mv(`${imagePath}${uploadedFile.name}`, (err) => {
          const uploadedRes = {
            data: "",
            isUploaded: false,
            messageError: "",
          };
          if (err) {
            uploadedRes.messageError = err;
          } else {
            uploadedRes.isUploaded = true;
            uploadedRes.data = `${config.IMAGE_URI}/${uploadedFile.name}`;
          }
          resolve(uploadedRes);
        });
      })
  );
  return Promise.all(handleUploadMultiFiles)
    .then((response) => {
      const imageUrls = [];
      const imageLinks = [];
      for (const res of response) {
        if (res.isUploaded) {
          imageUrls.push({
            url: res.data,
            user_id: user_id,
            created_at: new Date(),
          });
          imageLinks.push(res.data);
        }
      }
      console.log('[UploadService] Image Url:', imageUrls);
      console.log('[UploadService] Image links:', imageLinks);
      return ImageModel.bulkCreate(imageUrls)
        .then(() => imageLinks)
        .catch((err) => {
          console.log("Error:", err);
          return imageLinks;
        });
    });
}

module.exports = {
  uploadMultipleFiles: uploadMultipleFiles,
};
