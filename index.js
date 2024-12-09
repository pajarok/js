console.log('Hola Mundo')

//asi se escribe un comentario
// tipos de datos de javascript
// String: cadena de caracteres. 'a' 'hola mundo' "hola"
//Boolean: contiene solo dos valores true o false
//Null: es un valor y es nulo. cuanso una variable se encuentra vacia. no contiene datos
//Number: 12345689 12 132 
//Undifined: algo que no ha sido definido
//Object: objeto son estructuras que nos oermiten agrupar todo tipo de datos

// definicion de variables pueden ser: VAR: con esta definicion se ira al tope del archivo, tiene un comortamiento extaño.
//LET:  
//CONST


let miPrimeraVariable = 'Mi Primera Variable'
// console.log(miPrimeraVariable);

//mutabilidad
miPrimeraVariable = 'Esto ha cambiado'
// console.log(miPrimeraVariable);

//Boolean
let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -12

// console.log(miBoolean, miNumero, miNumero2, miNumero3, miOtroBool);

let undef
// console.log(undef);

let nulo = null
// console.log(nulo);

//objeto es una agrupacion de datos, estos datos hace sentidos entre si
//Objeto vacio
const miPrimerObjeto = {
}
// Objeto de agrupaciones de datos que hacen sentido entre si
const miObjeto = { 
    unNumero:12,
    unString:'Es aqui y nada mas',
    unaCondicion: true,
}

// console.log(miObjeto);

//arreglos
const arrVacio = []
const arr = [1, 2, 'hola', 'mundo', miObjeto]

// console.log(arrVacio, arr);

arr.push(5)

// console.log(arr);

arrVacio.push(75)
arrVacio.push(7)
arrVacio.push(25)
arrVacio.push(85)
arrVacio.push(miPrimeraVariable)

// console.log(arrVacio);


// operaciones matematicas

// const suma = 1 + 2
// const restar = 2 - 1
// const multiplicar = 3 * 2
// const division = 9 / 3

// console.log(suma, restar, multiplicar, division);

const modulo = 10 % 3
// console.log(modulo); 

// const vs let es que la primera no nos deja definir la variable por segunda vez redefinir no es posible
// Operadores matematicos
let num = 5
// num++
// num++
// num++
// num++
// num++
// num++
// num--
// num--
// num--
// num--
num += 7
num -= 3
num *= 8
num /= 2

// console.log(num);

//operadores de comparación

const resultado1 = 5 === 6
//igualdad no estricta, strings puede ser iguales a los nimeris si el valos es el mismo
const resultado2 = 5 == '5' //comparamos un numero con un string
 
const resultado3 = 5 < 6
const resultado4 = 5 < 5

const resultado5 = 5 > 6
const resultado6 = 5 > 4

const resultado7 = 5 <= 5
const resultado8 = 5 <= 6

const resultado9 = 5 >= 5
const resultado10 = 5 >= 6

const resultado11 = 5 !== 6
const resultado12 = 5 != '5'

// console.log(resultado1, resultado2, resultado3, resultado4, resultado5, resultado6, resultado7, resultado8, resultado9, resultado10, resultado11, resultado12);


// operadores logicos or = ||, and = &&, not = !

// el operador or lo que hara sera evaluar el primer valor que retorne o evalue en true
// en el caso de no existir ningun verdadero nuestra variable va a evaluar el falso 
const resultadoOr = false || true



// console.log(resultadoOr);

// operador and va a funcionar similar al de or en este caso busca el primer false, para evaluar el true solo debe haber este valor
const resultAnd = true && false

// console.log(resultAnd);

// operador not este dara vuelta al valor que este tenga. valor opuesto 

const resultnot = !true
// console.log(resultnot);

// control de flujo

//control de flujo if
//control de flujo, esto nos permite realizar iteraciones y evaluar condiciones
//nif evalual el resultado de la condicion o ejecucion
// if (true) {
//     console.log('Estoy dentro de un if!');
// }
// else siempre siempre se tiene que escribir junto con if

// const edad = 5
// if (edad > 5 && edad < 18){
//     console.log('El niño puede jugar');
// } else {
//     console.log('El niño no puede jugar :(');
// }
// console.log('Fin del programa')

// control de flujo while

// const edad = 5
// if (edad > 5 && edad < 18){
//     console.log('El niño puede jugar');
// }
// let x = 0

// while(x < 5) {
//     console.log(x);
//     x++
// }
// console.log('Terminando el loop');
let x = true
while (x) {
    // console.log(x);
    x = false
}
// console.log('Termianndo el Loop'); 

// control de flujo switch no va a permitir que se pueda ejecutar una instrucción o otra instrución
// al cambiar (1) lo que esta entre parentesis va arrojando otro valor
//  sino se coloca el break arrojara tosoa los valores que no tengan el break

// switch (1) {
//     case 1: {
//         console.log('Soy el caso 1');
//         break;
//     }
//     case 2: {
//         console.log('Soy el caso 2');
//         break;
//     }
//     case 3:
//         console.log('Caso 3'); 
//         break;      
//     default:
//         console.log('no hay casos');
//         break; 
// }
// for es una instrucción bastante similar a while
// nos permite iterar o encontrarnos un loop hasta que se cumpla una instrucción


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// como acceder a un arreglo utilizando la instrucción de for
// los arreglos en JS van a contar con una propiedad llamada lenght
// esta propiedad nos permite saber el largo o longitud del arreglo
// const numeros = [1, 2, 'Hola', 4, 5]
// para acceder al valor que se encuentra en este arreglo 
// console.log(numeros[3]);

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// Funciones en Js

// function iterar(arg1) {
//     for (let i = 0; i < arg1.length; i++) {
//     console.log(arg1[i]);
// }

// }
// const numeros = [1, 2, 'Hola', 4, 5]
// const nombre = ['Julio, Agosto, Septiembre, Octubre, Noviembre']

// iterar(numeros)
// iterar(nombre)


// function suma(a, b) {
    // console.log(a + b);
//     return a + b;
// }
// const resultadoSuma1 = suma(1, 2)
// const resultadoSuma2 = suma(6, 7)
// const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)

// console.log('resultado', resultadoSuma3);


// Callbacks funcion que se va a ejecutar al final de una funcion

function sumar(a, b, cb) {
    const r = a + b
    cb(r)
}

function callback(result) {
    console.log('resultado', result);
}

// sumar(2, 3, callback)

// Fat arrow function tien un par de sutiles diferencias. tienen dos principales beneifios
// no se usa la palabra reservada function
// si esta tien uan sola linea no es necesalio colocar el valor de return ya que esta implicito

const miFatArrowFunction = (a, b) => a + b
// const r = miFatArrowFunction(1, 2)
// console.log(r); 
const otraFAF = (a, b) => {
    return a + b
}
const r = otraFAF(1, 2)
// console.log(r);

// funciones anonimas es una funcion que no tiene ningun nombre, se usa en el 
//constexto cuando va a ser ejecutada por otra funcion
// no vamos a ejecutar esto en otra parte del codigo o aplicacion

sumar(2, 3, function (r){
    console.log('Soy una función anónima y mi resultado es', r);
})
