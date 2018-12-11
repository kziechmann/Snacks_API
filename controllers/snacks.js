const model = require('../models/snacks')

const getAll = function(req, res, next) {
  model.getAll('snacks')
    .then((result) => {
      res.send(result)
    })
}

const getOne = function(req, res, next) {
  const id = req.params.id
  model.getOne('snacks', id)
    .then((result) => {
      res.send(result)
    })
}

const post = function(req, res, next) {
  model.post('snacks', req.body)
    .then(result => {
      res.send(result)
    })
}

const delOne = function(req, res, next) {
  const id = req.params.id
  model.delOne('snacks', id)
    .then(result => {
      res.send(result)
    })
}


module.exports = {
  getAll,
  getOne,
  delOne,
  post
}
