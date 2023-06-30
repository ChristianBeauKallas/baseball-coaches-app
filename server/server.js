const express = require('express');
const config = require('./config');
const router = require('./routes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', router);

app.use((err, req, res, next) => {
    console.log(err);
    res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`);
});

