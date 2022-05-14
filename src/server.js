let express = require('express'); // inyección de dependencia express

let app = express; // declaración de app express

let personsRoute = require('./routes/person'); // definiendo router de persons

app.set('view engine', 'ejs'); // estableciendo ejs como motor de vistas
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public')); // carpeta de contenido estático

//definiendo puerto
let PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log('Escuchando en el puerto 3000'); // escucha del puerto
})