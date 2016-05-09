
exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function(table){
    table.increments();
    table.string('name');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};
