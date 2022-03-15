let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function() {
        console.log('El puntero del mouse está arriba'); 
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

// let myKey = 'nombre'; // dándole el valor de un atributo del objeto a una variable key
// console.log(obj[myKey]);  //  accediendo al atributo del objeto mediante la variable

// myKey = 'keypress';
// console.log(obj[myKey]());
// myKey = 'mouseOver';
// console.log(obj[myKey]());

// let myArray = []; // creacion del array

// myArray.push(4);  // se van agregando atributos al array de cualquier tipo
// myArray.push('Una cadena');
// myArray.push(obj);
//myArray.push(function (){  // creacion de una funcion dentro del array sin nombre
//    console.log('Hola desde el array'); 
// })

// console.log(myArray); // se lee todo el array sin importar el tipo de dato que contenga

// console.log(myArray[2].mouseOver); // se lee una función dentro del objeto en la posición especificada del array

// console.log(myArray[3]); // se lee la función en la posición especificada

let funcArray = [];

funcArray.push( () =>{
    console.log("Function 1");
});
funcArray.push( () =>{
    console.log("Function 2");
});
funcArray.push( () =>{
    console.log("Function 3");
});

funcArray.forEach((item) => {
    item();
})