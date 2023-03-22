let caja = document.getElementById("micaja");
caja.innerHTML = "Texto en la caja desde JS";
console.log(caja)


let todosLosDivs = document.getElementsByTagName('div');

todosLosDivs.array.forEach((valor, indice) => {
    let parrafo = document.createElement("p");
    let texto = document.createElement(valor);
    parrafo.appendChild(texto);
    
});

console.log(todosLosDivs)