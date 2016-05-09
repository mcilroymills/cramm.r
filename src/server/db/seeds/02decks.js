
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('decks').del(),

    // Inserts seed entries
    knex('decks').insert(
      {
        name: 'HTTP',
        user_id: 1
      }),
    knex('decks').insert(
      {
        name: 'CRUD',
        user_id: 1
      }),
    knex('decks').insert(
      {
        name: 'Technical Definitions',
        user_id: 2
      }),
    knex('decks').insert(
      {
        name: 'CSS',
        user_id: 2
      }),
    knex('decks').insert(
      {
        name: 'Workflow & Git',
        user_id: 3
      })
  );
};