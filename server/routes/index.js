const express = require('express');
const router = express.Router();

const uploadRouter = require('./upload');
router.use('/upload', uploadRouter);

const downloadRouter = require('./download');
router.use('/download', downloadRouter);

const userRouter = require('./user');
router.use('/user', userRouter);

module.exports = router;
