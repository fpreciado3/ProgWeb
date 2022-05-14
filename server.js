const express = require('express'); // dependencia express
let app = express(); // declaración de app como express
let PORT = process.env.PORT || 3000; // declarando puerto de uso 
app.use('/assets', express.static(__dirname + '/public')); //definiendo el directorio del contenido estático

app.use(express.urlencoded({extended: false})); // línea para parsear peticiones

app.set('view engine', 'ejs'); //definiendo ejs como motor de vistas

app.get('/', (req,res) => { //handler y definiendo el contenido del body del html y stylesheet
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> 
    <title>Document</title> </head> 
    <body> <h1> Hola mundo </h1> 
    <body> </html>`)
});

app.get('/person/:id', (req,res) => { //handler y definiendo person
    res.render('person', {Name: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.get('/student', (req,res) =>{ // handler de student
    res.render('index');
});

app.post('/student', (req,res) => { // definiendo post de student
    res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`)
});

app.post('/personjson', express.json({type: '*/*'}), (req, res) => {
    console.log('EL objeto contiene:', {req, body});
    console.log('Nombre:', req.body.firstname);
    console.log('Apellido:', req.body.lastname)
});

app.listen(PORT); // escuchando el puerto