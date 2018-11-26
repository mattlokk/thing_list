const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require ('./routes/api/items');

const app = express();

// Bodyparser middle-ware
app.use(bodyParser.json());

//connect to db
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('mongo db connected'))
    .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));