
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cards').del(),

    // Inserts seed entries
    knex('cards').insert(
      {
        deck_id: 1,
        question: "What's the keyboard shortcut for opening up Spotlight on your computer?","⌘ + Spacebar",
        answer: "⌘ + Spacebar",
        score: 1
      }),
    knex('cards').insert(
      {
        name: 'CRUD'
        user_id: 1
      }),
    knex('cards').insert(
      {
        name: 'Technical Definitions'
        user_id: 2
      }),
    knex('cards').insert(
      {
        name: 'CSS'
        user_id: 2
      }),
    knex('cards').insert(
      {
        name: 'Workflow & Git'
        user_id: 3
      })
  );
};