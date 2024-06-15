require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8089,
    IMAGE_STORAGE: process.env.IMAGE_STORAGE,
    IMAGE_URI: process.env.IMAGE_URI,
    DB: {
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        USER: process.env.DB_USER,
        PASS: process.env.DB_PASS,
        SCHEMA: process.env.DB_SCHEMA,
        DIALECT: process.env.DB_DIALECT,
    }
}