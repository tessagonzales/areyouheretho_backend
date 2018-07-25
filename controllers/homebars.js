const knex = require('../db/knex')

module.exports = {

  index: (req, res) => {
    knex('homebars')
    .then(results => {
      res.json(results)
    })
  },
  test :(req,res)=>{
    res.sendStatus(200);
  },

  patching: (req, res) => {
    console.log('req.body', req.body);
    knex("homebars").where('id', req.params.id)
      .update({
        open: !req.body.open
      }).returning('*').then((results) => {
        res.json(results)
      })
  },

}
