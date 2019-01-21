const express = require('express');

const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('../Obedience Tracker'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Obedience Tracker listing on port ${port}.`);
});