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

router.get('/person', function(req, res) {  //get de ruta 
    res.render('person'); // render de vista person
});

router.get('/main', function(req, res) { // get de ruta 
    res.render('main'); // render de vista main
});

router.get('/deletePerson/:id', function(req,res, next) { // delete person y su route handler   
    Person.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if(err) return next(err);
        res.redirect('/persons'); // redireccion al listado
    });
});

router.get('/findById/:id', function(req, res, next) { // route handler para obtener Id
    Person.findById(req.params.id, function(err, person) {
        if(err) return next(err);
        res.render('personUpdate', {person}); // render en update
    });
});

router.post('/updatePerson', function(req, res, next) { // post de update
    Person.findByIdAndUpdate(req.body.objId, { // recibe parametros de Id
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss }, function(err, post) { 
            if(err) return next(err);
            res.redirect('/persons'); // redireccion a persons
            });
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