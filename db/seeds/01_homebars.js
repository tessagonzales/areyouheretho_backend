let knex = require('knex');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('homebars').del()
    .then(function () {
      // Inserts seed entries
      return knex('homebars').insert([
        {id: 1, bar_name: 'Gonzo', open:false},
        {id: 2, bar_name: 'Manhattons', open:false},
        {id: 3, bar_name: 'Bario', open:false}
      ]);
    });
};
