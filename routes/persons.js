const express = require('express'); // dependencia de express
const router = express.Router(); // generando router
const mongoose = require('../node_modules/mongoose'); // dependenia de mongoose
let Person = require('../models/person'); // dependencia del modelo person

router.get('/persons', function(req, res, next) { // agregando ruta persons con GET
    Person.find(function(err, persons) {
        if(err) return next(err);
        res.json(persons);
    });
});

module.exports=router; // Exportando router