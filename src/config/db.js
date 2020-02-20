const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.NAME_DATABASE, process.env.USERNAME_DATABASE, process.env.PASSWORD_DATABASE, {
  host: process.env.HOST_DATABASE,
  port: process.env.PORT_DATABASE,
  dialect: 'postgres'
})

module.exports = sequelize