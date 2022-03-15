// var Emitter = require('./emitter'); inyeccion de la dependencia
var Emitter = require('events');
var config = require('./config');

var emtr = new Emitter; // se crea el emisor de eventos

emtr.on(config.events.GREET, () => { // creacion de la primer funcion greet
    console.log('Somewhere, someone said hello.'); 
});

emtr.on('greet', () => { // creacion de la segunda funcion greet
    console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');
emtr.on('jump', () => { // creacion de la funcion jump
    console.log('someone jumped!'); 
});

console.log(emtr); // llamada al emisor de eventos
emtr.emit('jump'); // llamando a la funcion jump del emisor

// el emisor de eventos manda a llamar la funcion miembro emit usando como parametro las funciones greet o jump para imprimirlas