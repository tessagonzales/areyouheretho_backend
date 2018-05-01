
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patrons', (table)=> {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.integer('bar_id')
      .references("id")
      .inTable("homebars")
      .onDelete("CASCADE")
      .index()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patrons')
};
