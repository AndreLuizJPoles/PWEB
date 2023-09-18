var num1 = prompt("Qual o número 1?");
var num2 = prompt("Qual o número 2?");

var soma = parseFloat(num1) + parseFloat(num2);
var sub = parseFloat(num1) - parseFloat(num2);
var prod = parseFloat(num1) * parseFloat(num2);
var div = parseFloat(num1) / parseFloat(num2);
var resto = parseFloat(num1) % parseFloat(num2);

alert("Soma: " + soma + "\n" + 
      "Subtração: " + sub + "\n" +
      "Produto: " + prod + "\n" +
      "Divisão: " + div + "\n" +
      "Resto: " + resto);