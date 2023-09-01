// DOM -  document objet model

// Selecionar elementos
const elementoPorId = document.getElementById("meuId");
console.log(meuId);

const elementoPorId2 = document.querySelector("#meuId");
console.log(elementoPorId2);

const elementoPorClasse = document.getElementsByClassName("minhaClasse");   
console.log(elementoPorClasse);

const elementoPorClasse2 = document.querySelector(".minhaClasse");
console.log(elementoPorClasse2);

// Manipular conteudo de texto

const element = document.querySelector("#meuId");
console.log(element.textContent);
setTimeout(() =>{
    element.textContent = "Mudei de texto";
}, 2000);

// trabalhando com atributos
const link = document.querySelector("a");
console.log(link);
link.setAttribute("href", "https://horadecodar.com.br/cursos");
console.log(link.getAttribute("href"));
console.log(link.hasAttribute("href"));

//remover atributo
link.removeAttribute("target");


// Manipulação de classes CSS
const elemento = document.querySelector("#meuId");

//Adicionar classe
elemento.classList.add("novaclasse");

// Remover Classe
elemento.classList.remove("minhaClasse");

elemento.classList.toggle("outraClasse");

// Manipular CSS

const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue";
elemento3.style.backgroundColor = "red";
// background-color -> backgroundColor

// Navegação entre nós
const elemento4 = document.querySelector("#meuInput");
const pai = elemento4.parentNode

console.log(pai);

// Obter primeiro filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);

// Manipulação estrutura do DOm
const novoElement = document.createElement("div");
console.log(novoElement);
novoElement.textContent = "Minha div javascript";

// document.body.appendChild(novoElement)
document.body.insertBefore(novoElement, pai)

// remover elemento
document.body.removeChild(elementoPorId)

// eventos



