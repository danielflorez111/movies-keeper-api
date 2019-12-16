const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.json('get user');
});

app.post('/user', (req, res) => {
    let body = req.body;
    res.json(body);
});

app.put('/user/:id', (req, res) => {
    const id = req.params.id
    res.json({ id });
});

app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    res.json({ id });
});

app.listen(3000, () => {
    console.log('Listening on port: ', 3000);
});
