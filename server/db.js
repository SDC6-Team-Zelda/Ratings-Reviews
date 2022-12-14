require("dotenv").config();
const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS
})

pool.connect()

pool.query('CREATE TABLE IF NOT EXISTS reviews (id SERIAL PRIMARY KEY, product_id INT, rating INT, date TEXT, summary VARCHAR(255), body VARCHAR(1000),recommend BOOLEAN, reported BOOLEAN, reviewer_name VARCHAR(255), reviewer_email TEXT, response TEXT, helpfulness INT)',
  (err, res) => {
    if (err) {
      console.log(err.messages)
    } else {
      console.log(res.rows)
    }
})
pool.query('CREATE TABLE IF NOT EXISTS reviews_photos (id SERIAL PRIMARY KEY, review_id INT, url VARCHAR(255))',
  (err, res) => {
    if (err) {
      console.log(err.messages)
    } else {
      console.log(res.rows)
    }
})
pool.query('CREATE TABLE IF NOT EXISTS characteristics (id SERIAL PRIMARY KEY, product_id INT, name VARCHAR(255))',
  (err, res) => {
    if (err) {
      console.log(err.messages)
    } else {
      console.log(res.rows)
    }
})

pool.query('CREATE TABLE IF NOT EXISTS characteristic_reviews (id SERIAL PRIMARY KEY, characteristic_id INT, review_id INT, value INT)',
  (err, res) => {
    if (err) {
      console.log(err.messages)
    } else {
      console.log(res.rows)
    }
})
// \copy characteristic_reviews from '../../../../Users/jonathanliang/Desktop/SDCdata/characteristic_reviews.csv' csv header;
// CREATE INDEX index ON reviews (product_id);
// CREATE INDEX char_reviews_idex ON characteristic_reviews (characteristic_id);
// pool.query(`SELECT * FROM reviews WHERE id=1`)
// .then(result => {
//   console.log('this is the characteristics', result.rows)
//   console.log(new Date())
// })

pool.query(`SELECT * FROM reviews_photos WHERE review_id=123`)
.then(result => {
  console.log('this is the characteristics', result.rows)
  console.log(new Date())
})


module.exports = pool;