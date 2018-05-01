
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('homebars').del()
    .then(function () {
      // Inserts seed entries
      return knex('homebars').insert([
        {bar_name: 'Gonzo', open:false},
        {bar_name: 'Manhattons', open:false},
        {bar_name: 'Bario', open:false}
      ]);
    });
};
