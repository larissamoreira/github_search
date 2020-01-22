const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb+srv://larissa:arcticm1@cluster0-nmpim.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();

app.use(cors({}));

app.use(express.json());

app.use(routes);

app.listen(3333);