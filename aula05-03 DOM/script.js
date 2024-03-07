let titulo = document.getElementById("titulo");

console.log(typeof titulo);
console.log(titulo.innerText);

function verificarTexto(){
let entrada = document.getElementById('nome')

if(entrada.value.length<5){
    entrada.className = "erro"
    alert("Valor é menor que 5")
}else{
    entrada.className()
    alert("Valor maior ou igual a 5")
}
}

 // Contar parágrafos no documento
 var totalParagrafos = document.getElementsByTagName('p').length;
 document.getElementById('resultgeral').textContent += totalParagrafos;

 // Contar parágrafos dentro do elemento article
 var articleElement = document.getElementById('articleId'); // Substitua 'articleId' pelo ID do seu elemento article
 var paragrafosNoArticle = articleElement.getElementsByTagName('p').length;
 document.getElementById('resultarticle').textContent += paragrafosNoArticle;

