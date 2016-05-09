var knex = require('../knex');

module.exports = {

  /**** READ ****/

  //Returns all cards in a given deck, joined with decks
  CardsByDeck: function (deck_id) {
    return knex
    .select('*')
    .from('cards')
    .join('decks', 'cards.deck_id', 'decks.id')
    .where({
      deck_id: deck_id
    })
  },
  //Returns all decks for a given user, joined with cards
  DecksByUser: function (user_id) {
    return knex
    .select('*')
    .from('decks')
    .join('cards', 'cards.deck_id', 'decks.id')
    .where({
      user_id: user_id
    })
  }

};