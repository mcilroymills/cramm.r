
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table){
    table.increments();
    table.integer('deck_id').references('id').inTable('decks').onDelete('CASCADE');
    table.text('question');
    table.text('answer');
    table.integer('points');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
