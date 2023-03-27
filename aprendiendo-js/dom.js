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
