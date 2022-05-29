const mongoose = require('mongoose'); //dependencia de mongoose
let PersonSchema = new mongoose.Schema({ // creando nuevo schema de mongoose con sus atributos
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

module.exports = mongoose.model('Persons', PersonSchema); //exportando modelo