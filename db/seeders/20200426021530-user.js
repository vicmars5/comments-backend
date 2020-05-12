const seeds = [{
  username: 'vic',
  password: '',
  createdAt: new Date(),
  updatedAt: new Date()
}, {
  username: 'jesus',
  password: '',
  createdAt: new Date(),
  updatedAt: new Date()
}]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', seeds, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
