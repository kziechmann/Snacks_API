const knex = require('../knex.js')

const getAll = function (table) {
  return knex(table)
}

const getOne = function (table, id) {
  return knex(table)
    .where({
      id: id
    })
    .first()
}

const post = function (table, snackInfo) {
  return knex(table)
      .insert({
        snackName: snackInfo.snackName,
        description: snackInfo.description,
        price: snackInfo.price
      },'*')
      .then((result) => {
        return result[0]
      })
}

const delOne = function (table, id) {
  return knex(table)
    .where({
      id: id
    })
    .del()
    .returning('*')
    .then(result => {
      return result[0]
    })
  }


module.exports = {
  getAll,
  getOne,
  delOne,
  post
}
