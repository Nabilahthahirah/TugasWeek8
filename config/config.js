const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'HW_8',
    password:'130923',
    port:5432,
})

module.exports = pool;