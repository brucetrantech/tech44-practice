const { Sequelize } = require('sequelize');
const config = require('../config');

const seq = new Sequelize(config.DB.SCHEMA, config.DB.USER, config.DB.PASS, {
    host: config.DB.HOST,
    port: config.DB.PORT,
    dialect: config.DB.DIALECT,
});

function checkConnection() {
    seq
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}

module.exports = {
    sequelize: seq,
    checkConnection: checkConnection,
};
