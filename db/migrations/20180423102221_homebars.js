
exports.up = function(knex, Promise) {
  return knex.schema.createTable('homebars', (table) => {
    table.increments();
    table.string('bar_name');
    table.boolean('open');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('homebars')
};
