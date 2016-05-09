var express = require('express');
var router = express.Router();
var pg = require('pg');
var queries = require('../db/queries/queries');



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Returns an array of all cards in a given deck
router.get('/cardsbydeck/:id', function(req, res, next) {
  queries.CardsByDeck(req.params.id)
  .then(function(cards) {
    res.json(cards);
  });
});

//Returns an array of all decks for a given user
router.get('/decksbyuser/:id', function(req, res, next) {
  queries.DecksByUser(req.params.id)
  .then(function(decks) {
    res.json(decks);
  });
});

module.exports = router;
