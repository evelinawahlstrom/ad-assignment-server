const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = User