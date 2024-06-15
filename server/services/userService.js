const { UserModel, ImageModel } = require("../models")

function signInByUserName (username) {
    return UserModel
        .findOrCreate({
            where: { username },
            defaults: {
                created_at: new Date(),
                updated_at: new Date(),
            }
        }).then(([userData]) => {
            return userData;
        })
        .catch(err => {
            console.log('Error:', err);
            throw err;
        });
}

function getFilesByUserId (user_id) {
    return ImageModel
        .findAll({
            where: { user_id },
            attributes: [
                'url',
            ]
        })
        .then(response => response.map(item => item.url))
        .catch(err => {
            console.log('Error:', err);
            throw err;
        });
}

module.exports = {
    signInByUserName: signInByUserName,
    getFilesByUserId: getFilesByUserId,
}