var express = require('express')
var router = express.Router();
var knex = require('../knex')

router.get('/', function(req, res, next) {
  knex('snacks')
    .then((result) => {
      res.send(result)
    })
})

router.get('/:id', function(req, res, next) {
  knex('snacks')
    .where({
      id: req.params.id
    })
    .first()
    .then((result) => {
      res.send(result)
    })
})

router.post('/', function(req, res, next) {
  knex('snacks')
    .insert({
      snackName: req.body.snackName,
      description: req.body.description,
      price: req.body.price
    },'*')
    .then((result) => {
      res.send(result[0])
    })
})

router.delete('/:id', function(req, res, next) {
  knex('snacks')
    .where({
      id: req.params.id
    })
    .del()
    .returning('*')
    .then((result) => {
      res.send(result[0])
    })
})

module.exports = router;
