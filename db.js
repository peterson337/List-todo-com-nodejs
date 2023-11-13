const Pool = require('pg').Pool

const pool = new Pool({
    user: 'user',
    password: 'ZfupvLgk7KtW4gvnHp7p9I9Z60AEbFUz',
    host: 'dpg-cl98k3v6e7vc73dar3a0-a',
    port: 5432,
    database: "databse_1hpt"
})

module.exports = pool;
