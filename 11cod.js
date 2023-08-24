/* **** Ejercicio 1
let peso, altura;
//el parseFloat me sirve para convertir un string en un decimal,
//ya que el dato que se captura es tipo string, el parseint es para convertir de string a entero

peso =parseFloat( prompt ("Digite su peso en KG: "));
altura =parseFloat( prompt ("Digite su altura en metros,: "));

bmi = (peso / (altura**2))

//document.write imprime en la pagina htl, alert me muestra un popup

alert ("Su BMI es :" + bmi)

 if (bmi < 18.5)  { 
        document.write (" Tienes bajo peso segun la OMS");

} else if ( bmi >= 18.5 &&  bmi <=24.9 ) {
    document.write("Tu peso es considerado normal segun la OMS");

} 
else if ( bmi >= 25 &&  bmi <=29.9  ) {
    document.write("Tienes sobrepeso segun la OMS");

} else {
    document.write("Tienes obesidad segun la OMS");
}


// *** Ejercicio 2

let celsius, fahrenheit;

celsius = 15
fahrenheit = 20
//celsius =parseFloat( prompt ("Digite la temperatura en gadros Celsius: "));
//fahrenheit=parseFloat( prompt ("Digite la temperatura en grados Fahrenheit: "));

temperaturafahrenheit = (celsius*(9/5)+32)
document.write ("La temperatura en Fahrenheit es:" +temperaturafahrenheit)

document.write("<br>")


temperaturacelcius = ((fahrenheit - 32) * (5/9))
document.write ("La temperatura en Celcius es:" +temperaturacelcius)


// **** Ejercicio 3

let nombre,apellido
// pide en pantalla el nombre
nombre = prompt ("Digite su nombre: ");
// pide en pantalla el apellido
apellido = prompt ("Digite su apellido: ");

// cambia lo que exista almacenado en nombre por minusculas
nombre = nombre.toLocaleLowerCase();
// cambia lo que exista almacenado en apellido por minusculas
apellido = apellido.toLocaleLowerCase();

function generaruser(nombre,apellido){
    //let user = (nombre.substring (0,1)+ apellido + Math.random()* 90 + 10);
    // math random: numero aleatorio entre 0 y 1, math Floor me trae el numero entero mas cercano
    let user = (nombre.substring (0,1)+ apellido + Math.floor(Math.random()*100));
    return user ;
}
// llamo la función
let user = generaruser(nombre,apellido);

// me muestra en pantalla el usuario
document.write ("su usuario es: " + user)

// *** Ejercicio 4

let numaleatorio,numuser,intentos,maxintentos

numaleatorio = Math.floor(Math.random()*10) + 1;
intentos = 0
maxintentos = 3
alert ("Adivine el numero")


while (intentos < maxintentos){
    numuser = parseInt (prompt("Intenta adivinar un numero del 1 al 10:" ));
   

if (numuser === numaleatorio)  { 
    alert (" Felicitaciones has acertado!");
   

}
else if ( numuser < numaleatorio ) {
    alert("El numero que indicaste es demasiado bajo");
    
}

else {
    alert("El numero que indicaste es muy alto");
    
    
    }
    intentos++;
}

if (intentos == maxintentos){
document.write ("Perdiste, el numero correcto era:" + numaleatorio)
}



// *** Ejercicio 5

var agenda = {};

nombre = prompt ("Indique el nombre que desea buscar:");

agenda["Melissa"] = "3105447810";
agenda["Sebastian"] = "325468451";
agenda["Antonio"] = "55585831745";

var ContactoABuscar = nombre;
var Telefono = agenda[ContactoABuscar];
    



if (agenda.hasOwnProperty(ContactoABuscar)) {
    
    document.write("El número de teléfono de " + ContactoABuscar + " es: " + Telefono);
} else {   
    document.write("El contacto " + ContactoABuscar + " no se encontró en la agenda telefónica.");
}


// *** Ejercicio 6


let dado1,dado2,lanzamiento1, lanzamiento2,suma

dado1 = Math.floor(Math.random() * 6) + 1; 
dado2 = Math.floor(Math.random() * 6) + 1;
suma = dado1 + dado2;

document.write ("El dado 1 tiene el numero:" ,dado1);
document.write("<br>");
document.write ("El dado 2 tiene el numero:" ,dado2);
document.write("<br>")
document.write ("La suma de ambos dados es: ", suma)


// *** Ejercicio 7
let correo



correo = prompt("indique el correo electronico");

if (
     // para validar si existe un arroba y si es 1 solo

    correo.indexOf("@") !== -1 && correo.indexOf("@") === correo.lastIndexOf ("@") &&

     // para validar si existe un punto y que este despues del arroba

    correo.lastIndexOf(".") !== -1 && correo.lastIndexOf(".") > correo.indexOf("@") &&

      // para validar si existen caracteres antes del arroba y despues del punto
    correo.indexOf("@") > 0 && correo.lastIndexOf(".") < correo.length -1)
{
    
        document.write ("La direccion de correo es valida");    
   }


    
else {
    document.write ("La direccion de no correo es valida");

}


// *** Ejercicio 8

let total,propina

total = 100000
propina = parseInt(prompt("Indique el porcentaje de propina:" ));

tips = (total * (propina/100)) ;

document.write ("La propina es: " + tips)

// *** Ejercicio 9

let mensaje, desplazamiento, mensajecifrado, caracter, caracterascii,ncaracterascii, caractercifrado

mensaje = "Hola Mundo*"
desplazamiento = 3

console.log (mensaje)

function cifrarmensaje (mensaje, desplazamiento){

    mensajecifrado = "";

    for ( let i = 0; i < mensaje.length; i++) {
        caracter = mensaje[i];                         
        caracterascii = mensaje.charCodeAt(i);        
        ncaracterascii = (caracterascii + desplazamiento)   
        caractercifrado = String.fromCharCode(ncaracterascii)
        mensajecifrado += caractercifrado
        
        
    } 

    return mensajecifrado

   
} 

mensajecifrado = cifrarmensaje(mensaje, desplazamiento);
document.write("Mensaje cifrado: ", mensajecifrado)


// *** Ejercicio 10
let tarjeta,digitosTarjeta,digitosDuplicados,sum

tarjeta = 36000100000106

console.log(tarjeta)

digitosTarjeta = tarjeta.toString().split("").map(Number)
console.log(digitosTarjeta)


for (i = digitosTarjeta.length - 2; i >= 0; i -= 2) {
  digitosDuplicados = digitosTarjeta [i] *2
  //console.log(digitosDuplicados) // ya esta en numero

  if (digitosDuplicados > 9) {
      digitosDuplicados =   digitosDuplicados - 9 // esta es otra manera de aplicar el algoritmo de linh, si hay un numero de dos digitos se le resta 9
     // console.log (digitosDuplicados)
  }
  digitosTarjeta [i] = digitosDuplicados
 
}

sum = digitosTarjeta.reduce((a, b) => a + b,0)


if (sum % 10 ===0) {
  document.write ("su tarjeta es valida")
}else {
    document.write("Su tarjeta no es valida")
}



// **Ejercicio 11


let cod = "El gato rojo tiene hambre"
let cod1 = cod.replace("gato", "agente").replace("rojo","secreto").replace("hambre","mision")

document.write ("El mensaje codificado es: " + cod)
document.write("<br>")
document.write ("El mensaje descodificado es: " +cod1)

//***Ejercicio 12

let frase, frases, fraseinver

frase = prompt ("Digite la frase que desea invertir") 

frases = frase.split ("")

fraseinver = frases.reverse().join("")
document.write ("La fres invertida es: " + fraseinver)


//*** Ejercicio 13


let nombre, animal, nombresuper
nombre = prompt ("Indique su nombre")
animal = prompt ("Indique su animal favorito")

nombresuper = animal.charAt(0).toUpperCase() + animal.slice(1)+ " " + nombre;
document.write("El nombre de su superheroe es: " + nombresuper)

//***Ejercicio 14

let contraseña
contraseña = prompt ("Indique la contraseña, debe tener al menos 8 caracteres, una letra mayuscula, una letra minuscula y un numero")

if (contraseña.length >= 8 && contraseña.match(/[A-Z]/) && contraseña.match(/[a-z]/) && contraseña.match(/\d/)  ) {

    console.log ("Contraseña valida")

} else {
    console.log ("Contraseña no valida")
}


//*** Ejercicio 15 

let cadena,vocales,consonantes, cadenamin,cantvocales

cadena = prompt ("Introduzca la cadena")

// Ponemos la cadena en minuscula para que el conteo no sea sensible
cadenamin = cadena.toLowerCase()

//esto me devuelve un array con las vocales, la g lo busca de forma global en toda la cadena


vocales = cadena.match(/[aeiou]/g) 

// esto me devuelve un array con las consonantes, esta expresion lo que hace es excluir las vocales y el \s lo que representa son los espacios 
consonantes = cadena.match(/[^aeiou\s]/g)


//console.log (vocales.length)
console.log (vocales)
console.log (consonantes)

//console.log(consonantes.length)


//*** Ejercicio 16

let cadena,cadenainver,cadenamin,cadenamin1
cadena = prompt ("Introduzca la cadena")


// Eliminar los espacios en blanco  \s --> selecciona espacios en blanco, tabulaciones y saltos de linea
//+: en conjunto con \s sirve para tomar espacios consecutivos, de esta forma si hay 1 o mas espacios seguidos se eliminaran en conjunto
// el g es para hacerlo de fomra global en todo el string


cadenamin = cadena.toLowerCase().replace(/\s+/g, '').split("")
cadenamin1 = cadenamin.join("")
cadenainver = cadenamin.reverse().join("")

console.log (cadenamin)
console.log (cadenainver)
console.log (cadenamin1)

if (cadenainver === cadenamin1){
    console.log("La cadena de texto es un palíndromo")
}
else {
    console.log("La cadena de texto no es un palíndromo")
}


// ***Ejercicio 17


let frase, acronimo, fraselen, acronimo1,acronimo2

frase = prompt ("Introduzca la frase de la cual quiere el acronimo")

acronimo = frase.split (" ")
fraselen = acronimo.length //2
acronimo1 = " "


for (i = 0; i < fraselen ; i++)
{
    acronimo2 = acronimo[i].charAt(0).toUpperCase()
        acronimo1 += acronimo2
}


document.write ("El acronimo es: " + acronimo1)


// *** Ejercicio 18 

let mensaje,cantidadcaracteres, palabras,cant
mensaje = prompt ("Digite el mensaje de texto")

cantidadcaracteres = mensaje.length

palabras = mensaje.split(/\s+/).length

oraciones = mensaje.split (/[.!?]+/).length

document.write ("La cantidad de caracteres del mensaje es: " + cantidadcaracteres)
document.write("<br>")
document.write("La cantidad de palabras del mensaje es: " + palabras)
document.write("<br>")
document.write("La cantidad de oraciones del mensaje es: " + oraciones)



// *** Ejercicio 19

let mensaje, desplazamiento, mensajecifrado, caracter, caracterascii,ncaracterascii, caractercifrado


mensaje = prompt (" Indique el mensaje que desea cifar")
//mensaje = "Hola MundoZz!"
desplazamiento = 1

console.log (mensaje)

function cifrarmensaje (mensaje, desplazamiento){

    mensajecifrado = "";

    for ( let i = 0; i < mensaje.length; i++) {
        caracter = mensaje[i];   
        
        if (caracter>= "a" && caracter <= "z") {
        
        caracterascii = mensaje.charCodeAt(i);        
        ncaracterascii = (caracterascii + desplazamiento) 
        caractercifrado = String.fromCharCode(ncaracterascii)
               
         // convierte el ascii a un string y me devuelve la letra siguiente
       // mensajecifrado += caractercifrado
        

        }  else  if (caracter >= "A" && caracter  <= "Z") {
        caracterascii = mensaje.charCodeAt(i);        
        ncaracterascii = (caracterascii + desplazamiento)   
        caractercifrado = String.fromCharCode(ncaracterascii) // convierte el ascii a un string y me devuelve la letra siguiente
        //mensajecifrado += caractercifrado
        //console.log (caracter)
        //console.log (caracterascii)
        //console.log (ncaracterascii)
        //console.log(caractercifrado)


            }

     if (caracter === " ") {
        caractercifrado = " ";
        
     }
     if (caracter === "Z") {
        caractercifrado = "A";
      }
      if (caracter === "z") {
        caractercifrado = "a";
      }

      if (!caracter.match(/[a-zA-Z]/)) {
        caractercifrado = caracter;
        
      }

       
      mensajecifrado += caractercifrado

    } 
    
        return mensajecifrado

   
} 
mensajecifrado = cifrarmensaje(mensaje, desplazamiento);
document.write("Mensaje cifrado: ", mensajecifrado)



// *** Ejercicio 20

let palabra

palabra = prompt ("Indique la palabra") 

if (palabra.match(/[áéíóúÁÉÍÓÚ]/)){

    console.log ("La palabra esta español")

} else {
    console.log ("La palabra esta en ingles")
}



// *** Ejercicio 21

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");

    } else if (i % 3 === 0) {
      console.log("Fizz");

    } else if(i % 5 === 0) {
      console.log("Buzz");

    } else {
      console.log(i);
    }
  }
 


// *** Ejercicio 22

let caracter, mensaje, mensajeLeet

const tabla = {
    'a': '4',
    'b': '8',
    'c': '[',
    'd': ')',
    'e': '3',
    'f': '|=',
    'g': '&',
    'h': '#',
    'i': '1',
    'j': ',_|',
    'k': '>|',
    'l': '1',
    'n': '^/',
    'o': '0',
    'p': '|*',
    'q': '(_,)',
    'r': 'I2',
    's': '5',
    't': '7',
    'u': '(_)',
    'v': '\/',
    'w': '\/\/',
    'x': '><',
    'y': 'j',
    'z': '2',
  }

  mensaje = prompt("Indique su mensaje")
   mensajeLeet = ''
  for (let i = 0; i < mensaje.length; i++) {
    caracter = mensaje[i].toLowerCase();
    

    if (tabla.hasOwnProperty(caracter)) {
        mensajeLeet += tabla[caracter];
       // console.log(mensajeLeet)
        } else {
            mensajeLeet += caracter;
          }
     
     
}
document.write ("El mensaje en lenguaje Leet es: " , mensajeLeet)
 

// *** Ejercicio 23 PREGUNTAR!!!!!

let secuencia,P1,P2, punto
const puntajes = {0: "Love", 15:15, 30:30, 40:40}

 secuencia = prompt ("Introduce la secuencia de ganadores de puntos (P1 o P2) separados por ,:").toUpperCase().split(",")

 console.log (secuencia)

P1 = 0
P2 = 0
console.log(P1)
console.log(P2)


for (let i = 0; i < secuencia.length; i++){
    punto = secuencia[i]
   

    if (punto === "P1") {
        if (P1 === 30){
            if (P2 === 40){
                P1 = "Deuce"
                P2 = "Deuce"
            } else {
                P1 = 40
            }
             

        }else if (P1 === 40){
            if (P2 === 40){
                P1 = "Deuce"
                P2 = "Deuce"
            } else {
             P1 = "Ventaja P1"
             P2=40
            
            }
        }else if (P1 === "Ventaja P1"){
            console.log ("Ha ganado el P1")
        break}
        else{
            P1 +=15
        }
     
        
            
   }else if (punto === "P2") {
        if (P2 === 30){
            if (P1 === 40){
                P1 = "Deuce"
                P2 = "Deuce"
            } else {
                P2 = 40
            }
            
       
        }else if (P2 === 40){
            if (P1 === 40 ){
                P1 = "Deuce"
                P2 = "Deuce"                
            }else {
                P2 = "Ventaja P2"
                P1 = 40
            }
        }else if (P2 === "Ventaja P2"){
            console.log ("Ha ganado el P2")    
        break

        }else {                      
            P2 +=15
        }
    }


    if (P1 === "Deuce"  && P2 === "Deuce"){
         console.log ("Deuce")

    }else if (P1 === "Ventaja P1"  && P2 === "Ventaja P2"){
        console.log ("Deuce")

    }else if (P1 === "Ventaja P1"){
        console.log("Ventaja P1")  

    }else if (P2 === "Ventaja P2") {
        console.log("Ventaja P2") 

    }else {
        console.log (`${puntajes[P1]}-${puntajes[P2]}`)
    

    }    


   }
      
   //console.log(P1,P2)


   if (P1 === "Ventaja P1" ){
    console.log("Ha ganado el P1")
   }else if (P1 > P2) { 
    console.log("Ha ganado el P1")
   }else if (P2 === "Ventaja P2"){
    console.log("Ha ganado el P2")   
   }else if (P2 > P1){
    console.log("Ha ganado el P2")  
   }else {
    console.log("El juego terminó en empate")
   }
   


// **** Ejercicio 24
let caracteres,indice1, indice2,contraseña
const longitud = 8
const incluirMayusculas = true
const incluirNumeros = true
const incluirSimbolos = true

const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '!@#$%^&*()_-+=<>?/[]{},.:;'

caracteres = caracteresMinusculas
contraseña = ""


function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



if (incluirMayusculas) {
    caracteres += caracteresMayusculas
}
if (incluirNumeros) {
    caracteres += numeros
}

if (incluirSimbolos) {
    caracteres += simbolos  
}
  


  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = generarNumeroAleatorio(0, caracteres.length -1);
    contraseña += caracteres.charAt(indiceAleatorio);
  
  }
document.write ("Su contraseña es: " + contraseña)



// ** Ejercicio 25


let numero, resultado

function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
 
  function esFibonacci(numero) {
    if (numero === 0 || numero === 1) {
      return true;
    }
  
    let a = 0;
    let b = 1;
    let c = a + b;
  
    while (c <= numero) {
      if (c === numero) {
        return true;
      }
  
      a = b;
      b = c;
      c = a + b;
    }
  
    return false;
  }
  
 
  function esPar(numero) {
    return numero % 2 === 0;
  }
  

  numero = parseInt(prompt("Introduce un número:"));
  
  
  resultado = [];
  
  if (esPrimo(numero)) {
    resultado.push("primo");
  }
  
  if (esFibonacci(numero)) {
    resultado.push("fibonacci");
  }else {
    console.log(`${numero} no es Fibonacci`);
  }
  
  if (esPar(numero)) {
    resultado.push("par");
  } else {
    resultado.push("impar");
  }
  
  console.log(`${numero} es ${resultado.join(", ")}`);
  



// *** Ejercicio 26

let jugador1, jugador2

function calcularGanador(jugadas) {
    const reglas = {
        "piedra": ["tijeras", "lagarto"],
        "papel" : ["piedra", "mano"],
        "tijeras": ["papel", "lagarto"],
        "lagarto": ["papel", "mano"],
        "mano" : ["piedra", " tijeras"]     
          }
  
    jugador1 = 0;
    jugador2 = 0;
  
    for (const [jugada1, jugada2] of jugadas) {
      if (jugada1 === jugada2) {
        continue;
      }
  
      if (reglas[jugada1].includes(jugada2)) {
        jugador1++;
        console.log (jugador1)
      } else {
        jugador2++;
        console.log(jugador2)
      }
    }
  
    if (jugador1 > jugador2) {
      return "Player 1";
    } else if (jugador2 > jugador1) {
      return "Player 2";
    } else {
      return "Tie";
    }
  }
  
  const jugadas = [
    ["piedra", "tijeras"],
    ["tijeras", "piedra"],
    ["papel", "tijeras"]
  ];
  
  const ganador = calcularGanador(jugadas);
  console.log(`El ganador es: ${ganador}`);
 


// *** Ejercicio 27



  const casas = {
    Gryffindor: 0,
    Slytherin: 0,
    Hufflepuff: 0,
    Ravenclaw: 0
  };
  
  function hacerPregunta(pregunta, opciones) {
    const respuesta = prompt(`${pregunta}\n${opciones}`).toLowerCase();
    return respuesta;
  }
  
  const respuesta1 = hacerPregunta("¿Qué cualidad valoras más?", "(a) Valentía\n(b) Ambición\n(c) Lealtad\n(d) Inteligencia");
  const respuesta2 = hacerPregunta(" Si te enfrentaras a un obstáculo difícil, ¿cuál sería tu enfoque para superarlo?:", "(a) Lucharía valientemente hasta superarlo.\n(b)  Analizaría la situación y buscaría la mejor estrategia.\n(c) Buscaría ayuda y apoyo de mis amigos.\n(d)Usaría cualquier medio necesario para superarlo y destacar.");
  const respuesta3 = hacerPregunta("¿Qué actividad disfrutas más?", "(a) Duelos\n(b) Planear estrategias\n(c) Cuidar de otros\n(d) Resolver acertijos");
  const respuesta4 = hacerPregunta("¿Cuál es tu materia favorita?", "(a) Defensa contra las Artes Oscuras\n(b) Pociones\n(c) Herbología\n(d) Adivinación");
  const respuesta5 = hacerPregunta("Elige un color:", "(a) Rojo\n(b) Verde\n(c) Amarillo\n(d) Azul");
  


  
  switch (respuesta1) {
    case 'a':
      casas.Gryffindor++
      break
    case 'b':
      casas.Slytherin++
      break
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Ravenclaw++
      break
  }
  
  switch (respuesta2) {
    case 'a':
      casas.Gryffindor++
      break
    case 'b':
      casas.Ravenclaw++
      
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Slytherin++
      break
  }
  
  switch (respuesta3) {
    case 'a':
      casas.Slytherin++
      break
    case 'b':
      casas.Gryffindor++
      break
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Ravenclaw++
      break
  }
  
  switch (respuesta4) {
    case 'a':
      casas.Gryffindor++
      break
    case 'b':
      casas.Slytherin++
      break
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Ravenclaw++
      break
  }
  
  switch (respuesta5) {
    case 'a':
      casas.Gryffindor++
      break
    case 'b':
      casas.Slytherin++
      break
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Ravenclaw++
      break
  }
  
  // Determinar la casa ganadora
  let casaGanadora = '';
  let maxPuntos = 0;
  
  for (const casa in casas) {
    if (casas[casa] > maxPuntos) {
      casaGanadora = casa;
      maxPuntos = casas[casa];
    }
  }
  
  console.log(` El Sombrero Seleccionador ha decidido que perteneces a la casa ${casaGanadora}.`);
  */



  // *** Ejercicio 28