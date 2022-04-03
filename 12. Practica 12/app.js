var express = require('express'); // inyección de la dependencia express
var ejs = require('ejs'); // inyección de dependencia ejs
var app = express(); // se declara express
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000 // estableciendo el puerto 3000 para listen
app.use('/assets', express.static(__dirname + '/public')); // define como directorio virtual assets para 
// contenido estático dirigido a una carpeta física llamada public dentro del directorio donde está __dirname}
// primer ruta nivel raíz

app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);
    next();
})

app.get('/', function(req, res) { // handler
    res.render('index'); // definiendo stylesheet/
});

app.listen(port); // activar server

// segunda ruta
app.get('/api', function(req, res) {
    res.json({firstname: 'John', lastname: 'Doe'}); // objeto json a regresar    
});

// tercera ruta que recibe parámetro
app.get('/person/:id', function(req, res) {
    res.render('person', {ID: req.params.id}); // concatenación de las dos partes del html con el parámetro en params
});