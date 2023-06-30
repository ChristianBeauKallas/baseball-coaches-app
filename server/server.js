import express from 'express';
import config from './config/index.js';
import router from './routes/index.js';
import cors from 'cors';
import dotenv from 'dotenv';

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
