//Minha implementação do print para testes
function print(variavel){
    console.log(variavel)
}
//Minha implementação do gets(). Não usar no desafio. O gets() já é implementado no sistema
function gets(pergunta) {
    let valor = prompt(pergunta);
    return valor;
}

//capturando div saida
let saida = document.getElementById("saida");
//para mostrar a saida no html
function mostrarSaida(valor){
    saida.innerHTML = valor;
}


//Desafio:
var s = gets("Por favor indicar o número de testes, altura mínima e máxima:").split(" ");

let n = parseInt(s[0]);
let min = parseInt(s[1]);
let  max = parseInt(s[2]);

let altura, conta = 0;
for (let x = 0 ; x < n ; x++) {
    altura = gets("Qual a altura?");
    if(altura >= min  && altura <= max)
        conta++;
}
print(conta);
mostrarSaida(conta);