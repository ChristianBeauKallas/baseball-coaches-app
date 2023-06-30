const express = require("express");
const config = require('./config')
const app = express();
const router = require('./routes')
const morgan = require('morgan')

app.use(express.json());
app.use(morgan("dev"));
app.use('/api', router);

app.use((err, req, res, next) => {
    console.log(err);
    res.json({ name: err.name, msg: err.message });
});

app.listen(5001, () => {
    console.log(`Server listening on port 5001...`);
});

