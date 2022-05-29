const mongoose = require('mongoose'); // dependencia mongoose
const express = require('express'); // dependencia de express
const personsRoutes = require('./routes/persons'); //dependencia del router

mongoose.Promise = global.Promise; // definiendo valor de mongoose y
const app = express();  //  generando app express
app.set('view engine', 'ejs'); // eligiendo ejs como motor de vistas
app.use(express.urlencoded( {extended:false}    )); // agregando urlencoded
app.use(personsRoutes); // agregand router

mongoose.connect( // Conectando con base de datos
    `mongodb+srv://ejemplo1:ejemplo2@cluster0.rw9pv.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
    console.log("Connected successfully");
});

app.listen(3000); // escuchando el puerto