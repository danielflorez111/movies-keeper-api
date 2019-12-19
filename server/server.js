require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/user'));

mongoose.connect('mongodb://localhost/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err
    console.log('DB online');
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port: ', process.env.PORT);
});
