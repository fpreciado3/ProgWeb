function Emitter() { // construccion de la funcion emitter
    this.events = {}; // creacion del objeto
}

Emitter.prototype.on = function(type, listener) { // agregando la función on con el type listener
    this.events[type] = this.events[type] || []; // validacion de si events está vacío o no
    this.events[type].push(listener);             // invoke a push introduciendo el listener al array
}

Emitter.prototype.emit = function(type) { // se crea función miembro llamada emit con type como parametro
    if(this.events[type]) { 
        this.events[type].forEach(function (listener) { // foreach para el array introduciendo el listener
            listener(); 
        })
    }
}

module.exports = Emitter; // export del módulo