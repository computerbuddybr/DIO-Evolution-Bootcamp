// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = gets();
    jogador2 = gets();

//TODO: Complete os espaços em branco com uma possível solução para o desafio

    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")
        print("Aniquilacao mutua");
    else if (                                                )
        print("Ambos venceram");
    else if (                                               ) print("Jogador 1 venceu");
    else if                                                 ) print("Jogador 2 venceu");
    else if (                                               ) print("Jogador 1 venceu");
    else if (                                               ) print("Jogador 2 venceu");
    else print("Sem ganhador");
}