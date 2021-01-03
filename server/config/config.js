module.exports = {
  "development": {
    "url": "postgres://postgres@localhost:5432/wheeljs_development",
    "dialect": "postgres",
    "operatorsAliases": '0'
  },
  "test": {
    "url": "postgres://postgres@localhost:5432/wheeljs_test",
    "dialect": "postgres",
    "operatorsAliases": '0'
  },
  "staging": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres",
    "operatorsAliases": '0'
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres",
    "operatorsAliases": '0'
  },
}
