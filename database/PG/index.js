const { Pool } = require('pg')
const pool = new Pool({
  user: 'vivs',
  host: 'localhost',
  database: 'fec',
  password: 'postgres',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('CONNECTED TO PG');
  }
})

const Products = `CREATE TABLE IF NOT EXISTS
products (
  id SERIAL PRIMARY KEY,
  productCategoryId INTEGER UNIQUE,
  productCategory VARCHAR,
  price INTEGER,
  productName VARCHAR,
  brandName VARCHAR,
  onlineExclusive BOOLEAN,
  reviewStarCount VARCHAR,
  reviewCount INTEGER,
  colors VARCHAR[],
  colorImages VARCHAR[],
  fit VARCHAR[],
  sizeStandard VARCHAR[],
  sizePetite VARCHAR[],
  sizePlus VARCHAR[],
  sizesUnavailable VARCHAR,
  sizePetiteUnavailable VARCHAR,
  sizePlusUnavailable VARCHAR,
  image VARCHAR[]
)`

pool.query(Products)
  .then(() => console.log('TABLE'))
  .catch((error) => console.log(error))

// pool.end()
module.exports = pool;