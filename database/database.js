
const Sequelize = require('sequelize');


const connection = new Sequelize(
    'bd_clinica',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;