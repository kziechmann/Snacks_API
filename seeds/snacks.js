'use strict'

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(() => {
      // Inserts seed entries
      return knex('snacks').insert([{
        id: 1,
        snackName: 'Cookies',
        description: 'Delicious home-baked chocolate chip morsels.',
        price: 4
      },
      {
        id: 2,
        snackName: 'Apple',
        description: 'Granny smith apples from happy orchards.',
        price: 2
      },
      {
        id: 3,
        snackName: 'Chips',
        description: 'Kettle-cooked potato chips. Extra crispy.',
        price: 3
      },
      {
        id: 4,
        snackName: 'Granola',
        description: 'Toasted oats with walnuts and raisins',
        price: 2
      }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks))")
    });
};
