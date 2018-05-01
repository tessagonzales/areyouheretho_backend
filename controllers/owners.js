const knex = require('../db/knex')

module.exports = {

  index: (req, res) => {
    knex('owners')
    .then(results => {
      res.json(results)
    })
  },

}
