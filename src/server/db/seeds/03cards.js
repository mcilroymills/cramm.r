
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cards').del(),

    // Inserts seed entries
    knex('cards').insert(
      {
        deck_id: 5,
        question: "What's the keyboard shortcut for opening up Spotlight on your computer?",
        answer: "⌘ + Spacebar",
        points: 1
      }),
    knex('cards').insert(
      {
        deck_id: 5,
        question: "What's the shortcut for opening the Chrome Dev Tools?",
        answer: "⌘ + Option + I",
        points: 2
      }),
    knex('cards').insert(
      {
        deck_id: 5,
        question: "How do you see all the remote repositories in a project with git?",
        answer: "git remote -v",
        points: 3
      }),
    knex('cards').insert(
      {
        deck_id: 5,
        question: "You've run 'git commit' and forgotten a message and suddenly you're in VIM! How do you exit?",
        answer: ":wq or :x",
        points: 4
      }),
    knex('cards').insert(
      {
        deck_id: 5,
        question: "With git, how do you run the interactive staging tool?",
        answer: "git add -p",
        points: 5
      }),
    knex('cards').insert(
      {
        deck_id: 4,
        question: "Write a CSS selector, rule, and value that will change a link to red on hover",
        answer: "a:hover { color: red; }",
        points: 1
      }),
    knex('cards').insert(
      {
        deck_id: 4,
        question: "How do you horizontally center a `display: block` element that has a width and height.",
        answer: "margin: auto",
        points: 2
      }),
    knex('cards').insert(
      {
        deck_id: 4,
        question: "Write a CSS selector, rule, and value that will change a div to the height of the browser's height.",
        answer: "div { height: 100vh; }",
        points: 3
      }),
    knex('cards').insert(
      {
        deck_id: 4,
        question: "What are the five CSS position values?",
        answer: "static, absolute, fixed, relative, sticky",
        points: 4
      }),
    knex('cards').insert(
      {
        deck_id: 4,
        question: "What is the 'rem' unit based off of?",
        answer: "The font-size in the html",
        points: 5
      }),
    knex('cards').insert(
      {
        deck_id: 1,
        question: "What does the status code 200 stand for?",
        answer: "OK",
        points: 1
      }),
    knex('cards').insert(
      {
        deck_id: 1,
        question: "What does the status code 404 stand for?",
        answer: "NOT FOUND",
        points: 2
      }),
    knex('cards').insert(
      {
        deck_id: 2,
        question: "What does CRUD stand for?",
        answer: "Create, Read, Update, Delete",
        points: 1
      }),
    knex('cards').insert(
      {
        deck_id: 2,
        question: "What are the CRUD commands in relation to HTTP?",
        answer: "POST, GET, PUT, DELETE",
        points: 2
      }),
      knex('cards').insert(
      {
        deck_id: 3,
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        points: 1
      }),
    knex('cards').insert(
      {
        deck_id: 3,
        question: "What does HTTP stand for?",
        answer: "Hypertext Transfer Protocol",
        points: 2
      })
  );
};