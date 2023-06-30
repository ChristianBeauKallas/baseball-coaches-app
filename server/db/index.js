import mysql from 'mysql2';
import config from '../config/index.js';

const pool = mysql.createPool(config.mysql);

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database!');
        connection.release();
    }
});

export default pool;
