/* para acceder a un array multidemencional podemos hacerlo de la siguiente form
//  consolo.log(arr[0][1])
//aqui nos dice que vamos a mostrar el primer elemento del primer array seguido del 2do elemento del 2 array.*/

/*Busquedas dentro de un array
arr.find(function(parametro)) */

/*Arr.some(parametro)
esta funcion nos va a decir si dentro del array hay algun elemento como el parametro, va a comprobar todos los elementos */

'use strict'

/*
1. pida 6 numero por pantalla y los meta en un array
2. debe mostrar el array entero en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4.inverti su orden y mostrarloo
5.Mostrar cuanto elemento tiene el array
6. busqueda de un valor introducido por el usuario y que nos diga si esta en el array y que no diga su indice
 */
var numeros = [];
function mostrararray(elementos, textoCustom){
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
    document.write("<li>" +elemento+ "</li>")
});
  document.write("</ul>");
}
for( let i = 0; i <= 5; i++){
    //numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}
//mostrar en el cuerpo de la pagina

document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) => {
    document.write("<strong>" +numero+ "</strong><br>")
})

//mostrar en la consola
console.log(numeros);

//ordenar y mostrar

numeros.sort()
mostrararray(numeros, 'ordenado');