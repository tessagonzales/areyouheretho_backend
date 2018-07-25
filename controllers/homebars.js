const knex = require('../db/knex')

module.exports = {

  index: (req, res) => {
    knex('homebars')
    .then(results=> {
      res.send(results)
    })
    .catch((error)=>{
      console.log(error);
      res.sendStatus(400);
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
