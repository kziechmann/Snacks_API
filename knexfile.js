module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/snacks'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/snacks'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
