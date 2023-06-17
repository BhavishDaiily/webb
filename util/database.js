const Sequelize = require('sequelize');
//const Sequelize = require('sequelize');

const sequelize = new Sequelize('webdb1', 'root', 'Bhavi@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports=sequelize;