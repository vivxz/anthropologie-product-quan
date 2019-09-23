const pg = require('pg');
const Sequelize = require('sequelize');

//OPTION 1:
const db = new Sequelize('postgres://vivs:postgres@localhost:5432/fec');

//OPTION 2:
// const db = new Sequelize('fec', 'vivs', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres'
// });


db
  .authenticate()
  .then(() => console.log('Connected to postgreSQL'))
  .catch((error) => console.log(error));

module.exports = db;

