//Minha implementação do print para testes
function print(variavel){
    console.log(variavel)
}
//Minha implementação do gets(). Não usar no desafio. O gets() já é implementado no sistema
function gets(pergunta) {
    let valor = prompt(pergunta);
    return valor;
}




//Desafio

let N = parseInt(gets("Quantos jogos"));
let jogador1, jogador2;



for (let i = 0; i < N; i++) {
    jogador1 = gets("Jogador 1").trim();
    jogador2 = gets("Jogador 2").trim();


    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")
        print("Aniquilacao mutua");
    else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL")
        print("Ambos venceram");
    else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PEDRA") print("Jogador 1 venceu");
    else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") print("Jogador 2 venceu");
    else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PAPEL") print("Jogador 1 venceu");
    else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PEDRA") print("Jogador 2 venceu");
    else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PAPEL") print("Jogador 1 venceu");
    else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "ATAQUE") print("Jogador 2 venceu");
    else print("Sem ganhador");
}