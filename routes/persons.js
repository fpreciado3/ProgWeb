const express = require('express'); // dependencia de express
const router = express.Router(); // generando router
const mongoose = require('../node_modules/mongoose'); // dependenia de mongoose
let Person = require('../models/person'); // dependencia del modelo person

router.get('/persons', function(req, res, next) { // agregando ruta persons con GET
    Person.find(function(err, persons) {
        if(err) return next(err);
        res.render('personsIndex', {persons})
    });
});

router.get('/person', function(req, res) { 
    res.render('person'); // render de vista
});

router.get('/main', function(req, res) {
    res.render('main');
});

router.post('/addPerson', function(req, res) { // realizando addperson con POST
    const myPerson = new Person({ // crea entidad
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    myPerson.save(); // guarda en bd
});


module.exports=router; // Exportando router