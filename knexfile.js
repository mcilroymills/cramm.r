module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/flash_cards',
    migrations: {
      directory: './src/server/db/migrations'
    },
    seeds: {
      directory: './src/server/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: '.src/server/db/migrations'
    },
    seeds: {
      directory: './src/server/db/seeds'
    }
  }

};
