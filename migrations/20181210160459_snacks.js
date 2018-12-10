'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('snacks', (table) => {
    table.increments().notNullable()
    table.string('snackName').notNullable()
    table.text('description').notNullable().defaultTo('')
    table.integer('price').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('snacks')
}
