var express = require('express'); // inyección de la dependencia express
var app = express(); // se declara express

var port = process.env.PORT || 3000 // estableciendo el puerto 3000 para listen
app.use('/assets', express.static(__dirname + '/public')); // define como directorio virtual assets para 
// contenido estático dirigido a una carpeta física llamada public dentro del directorio donde está __dirname}
// primer ruta nivel raíz

app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);
    next();
})

app.get('/', function(req, res) { // handler
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>Hello world!</h1></body></html>`); // definiendo stylesheet
});

app.listen(port); // activar server

// segunda ruta
app.get('/api', function(req, res) {
    res.json({firstname: 'John', lastname: 'Doe'}); // objeto json a regresar    
});

// tercera ruta que recibe parámetro
app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>'); // concatenación de las dos partes del html con el parámetro en params
});