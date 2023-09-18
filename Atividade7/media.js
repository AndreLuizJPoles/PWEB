var nome = prompt("Qual seu nome?");
var nota1 = prompt("Qual a primeira nota?");
var nota2 = prompt("Qual a segunda nota?");
var nota3 = prompt("Qual a terceira nota?");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3.0;

alert("A média de " + nome + " é " + media.toFixed(2));