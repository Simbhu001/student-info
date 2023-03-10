const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors =require('cors')
const router = require('./routings/routes');
const db = require('./config/db');
dotenv.config({ path: path.join(__dirname, '/.env') });

const app = express();

app.use(cors())
app.use(express.json());
app.use('/', router);

db();
app.listen(process.env.PORT, () => {
    console.log(` server started on port  : ${process.env.PORT}`)
});