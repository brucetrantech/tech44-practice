const express = require("express");
const fileUpload = require("express-fileupload");
const { uploadMultipleFiles } = require("../services/uploadService");
const router = express.Router();

router.use(fileUpload());

router.post("/", (req, res) => {
  console.log('[Upload Request] Files', req.files);
  console.log('[Upload Request] User Id', req.body.user_id);
  uploadMultipleFiles(req.files.files, req.body.user_id)
    .then((results) => {
      res.json({
        success: true,
        message: "File uploaded!",
        data: results,
      });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

module.exports = router;
