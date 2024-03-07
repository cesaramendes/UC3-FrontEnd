//1 - Calcule o preço total de um produto após aplicar um desconto de 20%

function calcularDesconto(){

    let preco = prompt("Digite o preço do produto:")
    let desconto = prompt("Digite o percentual de Desconto: ")
    let novoPreco = preco - (preco*(desconto/100))
    console.log(novoPreco)
    alert("Novo Preço é " + novoPreco)
}

calcularDesconto()

function conversorTemperatura(){

    let tempCelsius = prompt("Digite o valor em Celsius ")
    let conversao = (tempCelsius*1.8) + 32
    alert("A temperatura de Celsius para Fahrenheit é " + conversao)
}

conversorTemperatura

function calcularPerimetroArea(){

    let perimetro = prompt("Digite o valor do Perimetro do Triangulo: ")
    let area = prompt("Digite o valor do Triangulo: ")
    
}