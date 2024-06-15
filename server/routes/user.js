const express = require('express');
const router = express.Router();
const {
    signInByUserName,
    getFilesByUserId,
} = require('../services/userService');

router.post('/', (req, res) => {
    signInByUserName(req.body.username)
        .then(userData => {
            res.json({
                success: true,
                data: userData,
            });
        })
        .catch(err => {
            return res.status(500).send(err);
        });
});

router.get('/:user_id/images', (req, res) => {
    getFilesByUserId(req.params.user_id)
        .then(userImages => {
            res.json({
                success: true,
                data: userImages,
            });
        })
        .catch(err => {
            return res.status(500).send(err);
        });
})

module.exports = router;