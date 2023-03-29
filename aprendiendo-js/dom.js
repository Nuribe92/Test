let caja = document.getElementById("micaja");
caja.innerHTML = "Texto en la caja desde JS";
console.log(caja)


//let todosLosDivs = document.getElementsByTagName('div');

//todosLosDivs.array.forEach((valor, indice) => {
   /* let parrafo = document.createElement("p");
    let texto = document.createElement(valor);
    parrafo.appendChild(texto);
    
});*/


let element;
let divRojos = document.getElementsByClassName('rojo');
for (element in divRojos){
    if(divRojos[element].className == "rojo"){
    divRojos[element].style.background = "red";
    console.log(divRojos)
    }
}

//Eventos del Raton
let boton = document.querySelector("#boton");

function cambiarColor(){
    console.log("Me has dado click");
    let bg = boton.style.background;
    if( bg == "green"){
        boton.style.background = "red";
        
    }else{
        boton.style.background = "green"
    }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc"
    return true;
}

//Mouseover
boton.addEventListener('mouseout', function(){
    boton.style.background = "black"
});

//Focus
let input = document.querySelector('#campo_nombre');
input.addEventListener('focus', function(){
    console.log("estas dentro del input");
});
//blur
input.addEventListener('blur', function(){
    console.log("estas fuera del input");
});
//keydown
input.addEventListener('keydown', function(event){
    console.log("Escribiste ", String.fromCharCode(event.keyCode));
});
//keypress
input.addEventListener('keypress', function(event){
    console.log("Tecla presionada ", String.fromCharCode(event.keyCode));
});
//keyup
input.addEventListener('keyup', function(event){
    console.log("Tecla soltada ", String.fromCharCode(event.keyCode));
});

//TIMERS
// setInterval = nos permite correr un pedazo de codigo cada cierto tiempo

