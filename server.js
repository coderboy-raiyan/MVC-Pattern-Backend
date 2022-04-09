import cors from 'cors';
import express from 'express';
import connectDb from './db/connectDb';
import routes from './routes/index';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

connectDb();

// routes
app.use('/api', routes);

// connect with mongoDb function
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
