// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'containers-us-west-138.railway.app',
      port: '7768',
      database: 'railway',
      user:     'postgres',
      password: 'zF7SUFcZoO9tn7Mc7kRt'
    },
    useNullAsDefault:true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'containers-us-west-138.railway.app',
      port: '7768',
      database: 'railway',
      user:     'postgres',
      password: 'zF7SUFcZoO9tn7Mc7kRt'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
