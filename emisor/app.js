// var Emitter = require('./emitter'); inyeccion de la dependencia
var Emitter = require('events'); // con esta inyección de la dependencia todo corre de la misma forma que antes ya que es la dependencia propia de node js
var config = require('./config');

var emtr = new Emitter; // se crea el emisor de eventos

emtr.on(config.events.GREET, () => { // creacion de la primer funcion greet
    console.log('Somewhere, someone said hello.'); 
});

emtr.on(config.events.GREET, () => { // creacion de la segunda funcion greet
    console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');
emtr.on(config.events.JUMP, () => { // creacion de la funcion jump
    console.log('someone jumped!');  //las funciones cambiadas a config.events funcionan de igual forma ya que usan como referencia el objeto creado en el archivo config y ejecutan los eventos
});

console.log(emtr); // llamada al emisor de eventos
emtr.emit('jump'); // llamando a la funcion jump del emisor

// el emisor de eventos manda a llamar la funcion miembro emit usando como parametro las funciones greet o jump para imprimirlas