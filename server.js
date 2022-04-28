const express = require('express'); // dependencia express
let app = express(); // declaración de express
app.set('view engine', 'ejs'); // definiendo ejs como motor de vistas

let PORT = process.env.PORT || 3001; // definiendo puerto de escucha
app.use('/assets', express.static(__dirname + 'public')); // define como directorio virtual a assets para contenido estático

app.get('/', (req, res) => { // handler y definiendo el contenido del body en html así como su stylesheet
    res.send(`<DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>`)
});

app.get('/person/:id', (req,res) =>{  // handler
    res.render('person',{ID: req.params.id, MSG: req.query.message, TMS: req.query.times}); // renderizado y concatenacion 
});

app.listen(PORT); // activación del server