
const knex = require('../db');

class User {
  static create(user) {
    return knex('users').insert(user).returning('*');
  }

 
}

module.exports = User;
