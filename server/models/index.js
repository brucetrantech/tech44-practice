const { DataTypes } = require('sequelize');
const { sequelize } = require('../dbconnect');

const ImageModel = require('./ImageModel')(sequelize, DataTypes);
const UserModel = require('./UserModel')(sequelize, DataTypes);

module.exports = {
    sequelize,
    ImageModel,
    UserModel,
};