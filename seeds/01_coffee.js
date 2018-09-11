const coffees = require("../coffee")

exports.seed = function(knex, Promise) {
  return knex('coffee').del()
    .then(function () {
      return knex('coffee').insert(coffees);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE coffee_id_seq RESTART WITH 4;")
    })
};
