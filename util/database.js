const Sequelize = require("sequelize");

const sequelize = new Sequelize('node-complete', 'root', 'Shruti@SQL55', {
    dialect : 'mysql'
});

module.exports = sequelize;

module.exports = sequelize;