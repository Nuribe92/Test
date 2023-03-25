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
