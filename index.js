var express = require('express'); // inyección de la dependencia express
var app = express(); // se declara express

var port = process.env.PORT || 3000 // estableciendo el puerto 3000 para listen

// primer ruta nivel raíz
app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello world!</h1)</body></html>')
});

app.listen(port); // activar server