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
let n = parseInt(gets("Quantos patinhos?"));

while(n != -1) {
    let saida;
    if (n === 0) {
        saida = n;
        print(saida);
    } else {
        saida = n - 1;
        print(saida);
    }
    html += saida + '<br>';
    n = parseInt(gets("Quantos patinhos?"));
}

mostrarSaida(html);