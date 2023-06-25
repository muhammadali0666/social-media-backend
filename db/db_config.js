const pg = require('pg');

const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'exam_fourth_db',
  password: 'muhammadali5025',
  port: 5432,
})


module.exports = pool