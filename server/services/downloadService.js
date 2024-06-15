const fs = require('fs');
const { dirname } = require('node:path');
const rootDir = dirname(process.argv[1]);
const config = require('../config');

function downloadFileByFileName (fileName, res) {
    if (!fileName || fileName.trim() === '') {
        return res.status(404).send('Undefined file name');
    }
    const imagePath = rootDir + config.IMAGE_STORAGE + fileName;
    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).send('File not found');
      }
      res.download(imagePath, fileName, (err) => {
        if (err) {
          console.error('Error downloading file:', err);
          res.status(500).send('Error downloading file');
        }
      });
    });
};

module.exports = {
    downloadFileByFileName: downloadFileByFileName,
};
