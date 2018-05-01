
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owners', (table) => {
    table.increments();
    table.string('name')
    table.integer('bar_id')
      .references("id")
      .inTable("homebars")
      .onDelete("CASCADE")
      .index()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners')
};
