const homebars = require('../controllers/homebars')
const patrons = require('../controllers/patrons')
const comments = require('../controllers/comments')
const owners = require('../controllers/owners')

module.exports = function (app){

  app.get('/bars', homebars.index)

  app.get('/patrons', patrons.index)

  app.get('/comments', comments.index)

  app.get('/patrons', patrons.index)

  app.get('/owners', owners.index)

  app.post('/comments', comments.create)

  app.post('/patrons', patrons.create)

  app.delete('/comments/:id', comments.delete)

  app.delete('/patrons/:id', patrons.delete)

  app.put('/bars/:id', homebars.patching)

}
