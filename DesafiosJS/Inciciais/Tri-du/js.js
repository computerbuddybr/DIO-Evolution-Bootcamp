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

var s = gets("Quais as cartas").split(" ");
let A = parseInt(s[0]);
let B = parseInt(s[1]);
let C;
if(A === B){
    C = A;
}
else if(A > B){
    C = A;
}
else{
    C = B;
}
print(C);
mostrarSaida(C);