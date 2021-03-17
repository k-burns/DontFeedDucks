const Sequelize = require('sequelize')
const db = require('../db')

const Snacks = db.define('projects', {
  name: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.TEXT
  },
  good: {
    type: Sequelize.BOOLEAN
  },
  facts: {
    type: Sequelize.TEXT
  }
})

module.exports = Snacks
