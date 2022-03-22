// inyección de dependencia y declaración de express
const express = require('express');
const app = express();

app.get('/', (req, res) => { // handler
    res.send('Hello World, this is the root route');
});

// asignando el puerto que se usa como host
app.listen(3001);
app.get('/uno', (req, res) => { // handler
    res.send('Hello World, from route One');
});

// creación de nueva ruta prueba
app.get('/prueba', (req, res) => { // handler
    res.send('Hello World from the prueba');
});