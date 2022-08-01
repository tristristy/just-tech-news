//Import sequelize construct

const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database, pass in SQL information for user and password

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize