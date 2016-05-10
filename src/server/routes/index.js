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

module.exports = router;
