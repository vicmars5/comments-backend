const Sequelize = require('sequelize')
const config = require('../../config/db')
const db = {}

const sequelize = new Sequelize(config)

const models = [
  require('./comments'),
  require('./user')
]

models.forEach((build) => {
  const model = build(sequelize, Sequelize)
  db[model.name] = model
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
