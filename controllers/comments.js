const knex = require('../db/knex')

module.exports = {

  index: (req, res) => {
    knex('comments')
    .then(results => {
      res.json(results)
    })
  },

  create: (req, res) => {
    console.log(req.body);
    knex('comments').insert({
      commenter: req.body.commenter,
      comment: req.body.comment,
      photo_url: req.body.photo_url,
      bar_id: req.body.bar_id
    }, "*").then((results)=> {
      res.json(results)
    })
  },

  delete: (req, res) => {
    knex('comments').where('id', req.params.id).del()
    .then((results) => {
      res.json(results)
    })
  },
  
}
