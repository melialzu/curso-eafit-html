console.log ("Hello World")

// Declaración de variable

let nombre = "Melissa"
let edad = 30
let ciudad = "Medellin"

// Uso de variable

console.log ("Hola, mi nombre es" + nombre + "tengo" +edad+ "años y vivo en " +ciudad+ ".")

// sobreescribir variables

ciudad = "manizales"
console.log ("Hola, mi nombre es" + nombre + "tengo" +edad+ "años y vivo en " +ciudad+ ".")

// sumas
let num1 = 18
let num2 = 2
let summa = num1 + num2

console.log (summa)

// strings
let frase1 = "Hola"
let frase2 = " mundito"
let saludo = frase1 +  frase2

console.log(saludo)


console.log ("Hola, mi nombre es "  + nombre + " tengo " + edad + " años y vivo en " + ciudad+ ".")

//tipos de datos
let edad2 = 50
console.log (typeof edad2)

let mensajae = "Holi cariño"
console.log (typeof mensajae)

let estudiante = true
console.log (typeof estudiante)


// invertir una palabra 

let palabra = "casa"

let palabras = palabra.split ("")
// el reverse solo funciona en un array
let palabrainvertida = palabras.reverse().join("")
console.log (palabrainvertida)

// conversión y coerción

let cadena= "123"
console.log(typeof Number(cadena))

let numeroConvertir = 456
console.log(String (numeroConvertir))

console.log (123 + "456") // Coersión, implicitamente javascript convierte el # a string

console.log (10 == "10") // cuando son dos iguales valida el valor, cuando son 3 valida es el tipo

console.log("5"+ 3)
console.log("5" - 2) // el operador - es para restar, no esta sobrecargado
console.log([1,2,3] == "1,2,3")

// Falsey 
// 0, null, undefinen, "", NaN

var num = 0
if (num){
    //
}

// operadores de igualdad
// ==, ===
// !=, !==

console.log(1 == "1")
console.log(1 ==="1")
console.log("" == false)
console.log("" === false)


// Operadores logicos
// AND  &&
// OR ||

console.log (true && true)
console.log (true || true)

// NOT !
console.log(!true)

const   mensajeMostrar = ""
if (mensajeMostrar){

}else {

}

// precendencia de operadores logicos, siempre se ejecuta el AND
console.log (true && false || true && true)
console.log (true && false || true && true)


// ejecicio

function myFuntion (a,b){
 
}
