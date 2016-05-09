
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert(
      {
        name: 'StudyBunny',
        email: 'tester1@test.com',
        password: 'test'
      }),
    knex('users').insert(
      {
        name: 'Brogrammer667',
        email: 'tester2@test.com',
        password: 'test'
      }),
    knex('users').insert(
      {
        name: 'FailFast42',
        email: 'tester3@test.com',
        password: 'test'
      })
  );
};