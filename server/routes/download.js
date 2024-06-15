const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();
const { downloadFileByFileName } = require('../services/downloadService');

router.use(fileUpload());

router.get('/:fileName', (req, res) => {
  downloadFileByFileName(req.params.fileName, res)
});

module.exports = router;
