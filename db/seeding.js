const fs = require('fs');
const pool = require('../config/config.js');

// Membaca isi file seed.sql
const query = fs.readFileSync('./db/seed.sql', 'utf-8');
console.log(query);

pool.query(query, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Seeding Successfully");
        pool.end();
    }
});