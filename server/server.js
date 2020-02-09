require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

mongoose.connect('mongodb+srv://moviesAdmin:IsHroRWLTotTcqR2@cluster0-ln6fo.mongodb.net/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}, (err, res) => {
    if (err) throw err
    console.log('DB online');
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port: ', process.env.PORT);
});

// moviesAdmin
// IsHroRWLTotTcqR2
// mongodb+srv://moviesAdmin:IsHroRWLTotTcqR2@cluster0-ln6fo.mongodb.net/movies