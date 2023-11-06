/*Declare las siguientes variables;
firstName,lastName,country,city,age,isMarried,year
 y asignar un valor, use el operador typeof 
 para verificar diferentes tipos dedatos.*/

let firstName ='Guadalupe'
console.log(typeof firstName)

let lastName ='Nunez'
console.log(typeof firstName)

let country ='Mexico'
console.log(typeof country)

let city ='Playa del Carmen'
console.log(typeof city)

let age = 22
console.log(typeof age)

let isMarried =false
console.log(typeof isMarried)

let year = 2023
console.log(typeof year)



//Verifique si typeof'10'es igual a 10

console.log(typeof '10' === 10)



//Verifique si parseInt('9.8') es igual a 10

console.log(parseInt ('9.8') === 10)



/*Verifique cualquier valor booleano true o false.
1.Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
2.EscribatresdeclaracionesdeJavaScript que proporcionen un valor falso.*/

//1. Verdadero.

const check = 8<12
console.log(check)

const ten = 10===10
console.log(ten)

let clima ='lluvioso'==='lluvioso'
console.log(clima)



//2. Falso.

const number = 8>12
console.log(number)

const gravity_PI = 9.8===3.1416
console.log(gravity_PI)

const falso = 12>28
console.log(falso)



/*Calcule primero el resultado de la siguiente 
expresión de comparación sin usar console.log(). 
Después de decidir el resultado, 
confírmelo usando console.log().*/

console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==3)
console.log(4===3)
console.log(4!=3)
console.log(4!==3)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')



/*Utilice el objeto Date para realizar 
las siguientes actividades 

¿Que año es hoy?
¿Qué meses hoy conun número?
¿Qué fecha es hoy?
¿Qué día es hoy conun número?
¿Cuál es la hora actual?
¿Cuántos minutos hay actualmente?
Averigüe el número de segundos transcurridos 
desde el 1 de enero de 1970 hasta ahora.*/

const fechaActual =new Date()
const anoActual =fechaActual.getFullYear()
console.log('Año actual:', anoActual)

const mesActual =fechaActual.getMonth()
console.log('Mes actual (numero):', mesActual + 1)

const diaActual =fechaActual.getDate()
console.log('Fecha actual:', diaActual)

const diaSemanaActual =fechaActual.getDay()
console.log('Dia de la semana actual (numero):', diaSemanaActual)

const horaActual =fechaActual.getHours()
console.log('Hora actual:', horaActual)

const minutosActales =fechaActual.getMinutes()
console.log('Minutos actuales:', minutosActales)

let currentDate = new Date();
let secondsSince1970 = Math.floor(currentDate.getTime() / 1000);
console.log("Número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora: " + secondsSince1970);

/*Escriba un script que solicite al usuario que ingrese 
la base y la altura del triángulo y calcule el área de un triángulo (área=0,5xbxh).*/

var base =parseFloat(prompt('Ingrese la base del triangulo: '))
var altura =parseFloat(prompt('Ingrese la altura del triangulo: '))

var area = 0.5*base*altura;
console.log('El  area del triangulo es:'+area)



/*Escriba un script que solicite al usuario que ingrese el lado A, el lado B y el lado C del triángulo y calcule el perímetro del triángulo (perímetro=A+B+C)*/

var ladoA =parseFloat(prompt('Ingrese el lado A del triangulo:'));
var ladoB =parseFloat(prompt('Ingrese el lado B del triangulo:'));
var ladoC =parseFloat(prompt('Ingrese el lado C del triangulo:'));

var perímetro =ladoA+ladoB+ladoC;
console.log('El perimetro del triangulo es: '+perímetro);