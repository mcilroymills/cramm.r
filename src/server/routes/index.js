var express = require('express');
var router = express.Router();
var pg = require('pg');
var queries = require('../db/queries/queries');


/**Get Routes**/

//Returns an array of all cards in a given deck
router.get('/cardsbydeck/:id', function(req, res, next) {
  queries.CardsByDeck(req.params.id)
  .then(function(cards) {
    res.status(200).json({
      status: 'success',
      data: cards
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

//Returns an array of all decks for a given user
router.get('/decksbyuser/:id', function(req, res, next) {
  queries.DecksByUser(req.params.id)
  .then(function(decks) {
    res.status(200).json({
      status: 'success',
      data: decks
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

/**Post Routes**/

//Creates a new deck
router.post('/newdeck', function(req, res, next) {

  console.log("req.body", req.body);

  queries.NewDeck({
    name: req.body.deck.name,
    user_id: req.body.deck.user_id
  })
  .then(function(id) {//returns deck_id
    console.log("id returned from deck insert",id);
    //Give deck_id's to each card in array
    req.body.cards.forEach(function(el){
      el.deck_id = id[0];
    });
    console.log("cards about to go in", req.body.cards);

    queries.NewCards(req.body.cards)
    .then(function(ids){
      res.status(200).json({
      status: 'success',
      ids: ids
      });
    });
  })
  .catch(function (err) {
    return next(err);
  });
});



module.exports = router;
