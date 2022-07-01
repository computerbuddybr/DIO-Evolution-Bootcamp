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

let html = "";

//Desafio:

let T = parseInt(gets("Quantos casos de teste"));
let N;

let numeroDePessoasNosLados;
let numeroDePessoasNasPontas;
let totalPedidos;

function numeroPedidos(numeroDePessoasNosLados, numeroDePessoasNasPontas){
    return (numeroDePessoasNosLados * 2) + numeroDePessoasNasPontas;
}

//TODO: Complete os espaços em branco com uma possível solução para o desafio

while (T !== 0) {
    for (let i = 1; i <= T; i++) {
        N = parseInt(gets("Quantas pessoas"));
        if (N % 2 !== 0) {
            numeroDePessoasNosLados = N - 1;
            numeroDePessoasNasPontas = 1;

         } else {
            numeroDePessoasNosLados = N - 2;
            numeroDePessoasNasPontas = 2;
        }

        totalPedidos = numeroPedidos(numeroDePessoasNosLados, numeroDePessoasNasPontas);
        html += totalPedidos + "<br>";
        print(totalPedidos);
    }
    T = parseInt(gets());
}
mostrarSaida(html);