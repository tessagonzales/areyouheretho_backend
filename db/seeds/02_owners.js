let knex = require('knex');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {name: 'Gonzales', bar_id: 1},
        {name: 'Farrington', bar_id: 2},
        {name: 'Torregrossa', bar_id: 3}
      ]);
    });
};
