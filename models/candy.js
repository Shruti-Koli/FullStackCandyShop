const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Candy = sequelize.define('candy',{

    id:{
        type: Sequelize.INTEGER,
        unique:true,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Candy;