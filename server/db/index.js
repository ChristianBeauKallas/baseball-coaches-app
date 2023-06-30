const mysql = require('mysql2');
const config = require('../config');

const pool = mysql.createPool(config.mysql);

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database!');
        connection.release();
    }
});

module.exports = pool;
