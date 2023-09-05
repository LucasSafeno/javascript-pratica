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


// click
const botao =   document.querySelector("button")

botao.addEventListener("click", function(){
    console.log("botao clicado");
})


//mouse
const elemento5 = document.querySelector("#meuFormulario")
elemento5.addEventListener("mouseover", function(){
    console.log("mouse passou aqui")
})


// teclado
const campoInput = document.querySelector("#meuInput")
campoInput.addEventListener("keydown", function(){
    console.log("tecla pressionada")
})


// formulario
const form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    console.log("Formulario enviado")
})


// propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(event){
    console.log("Click capturado")
})

document.querySelector("#elementoFilho").addEventListener("click", function(event){
   // event.stopPropagation();
    console.log("Elemento Filho")
})

document.querySelector("#meuLink").addEventListener("click", function(event){
    event.preventDefault();
    console.log("Clicou no link")
})


// delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(event){
    if(event.target.matches(".classeDosFilhos")){
        console.log("Evento delegado para o filho")
    }
})

