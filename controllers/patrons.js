const knex = require('../db/knex')

module.exports = {

  index: (req, res) => {
    knex('patrons').then(results => {
      res.json(results)
    })
  },

  create: (req, res) => {
    console.log(req.body);
    knex('patrons').insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      bar_id: req.body.bar_id
    }, "*").then((results) => {
      res.json(results)
    })
  },

  delete: (req, res) => {
    knex('patrons').where('id', req.params.id).del()
    .then((results) => {
      res.json(results)
    })
  },

} //end of module exports
