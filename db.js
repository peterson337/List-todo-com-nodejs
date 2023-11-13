const Pool = require('pg').Pool

const pool = new Pool({
  connectionString: 'postgres://user:ZfupvLgk7KtW4gvnHp7p9I9Z60AEbFUz@dpg-cl98k3v6e7vc73dar3a0-a/databse_1hpt'
})

module.exports = pool;
