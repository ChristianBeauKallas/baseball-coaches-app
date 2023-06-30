require('dotenv').config();

const mysqlConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
};

const port = parseInt(process.env.PORT);

module.exports = {
    mysql: mysqlConfig,
    port: port,
};
