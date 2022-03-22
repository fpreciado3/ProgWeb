const express = require('express');
const app = express();

app.get('/', (req, res) => { // handler
    res.send('Hello World, this is the root route');
});

app.listen(3000);
app.get('/uno', (req, res) => { // handler
    res.send('Hello World, from route One');
});