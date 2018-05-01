
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('commenter');
    table.text('comment');
    table.string('photo_url');
    table.integer('bar_id')
      .references("id")
      .inTable("homebars")
      .onDelete("CASCADE")
      .index()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
