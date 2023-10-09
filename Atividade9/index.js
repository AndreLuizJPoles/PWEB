const num = 45
var mediaIdade=0, velha=0, nova=0, qtdePessimo=0, porcOtBom, qtdeHomem=0, qtdeMulher=0, qtdeOtBom=0

for(var i=0; i<num; i++){
    var idade = parseInt(prompt("Informa a sua idade: "))
    var sexo = prompt("Informa o seu sexo (F ou M): ")
    var nota = prompt("Informe a nota (Ótimo - 4, Bom - 3, Regular - 2 e Péssimo - 1): ")

    if(i==0){
        velha, nova = idade
    }else if(idade > velha){
        velha = idade
    }else if(idade < nova){
        nova = idade
    }

    if(sexo == "F"){
        qtdeMulher++
    }else if(sexo == "M"){
        qtdeHomem++
    }

    if(nota >= 3){
        qtdeOtBom++
    }else if(nota == 1){
        qtdePessimo++
    }

    mediaIdade += idade
}

porcOtBom = (qtdeOtBom/num) * 100
mediaIdade /= num

document.getElementById("media").innerHTML = "Média idade: " + mediaIdade;
document.getElementById("velha").innerHTML = "Maior idade: " + velha;
document.getElementById("nova").innerHTML = "Menor idade: " + nova;
document.getElementById("pessimo").innerHTML = "Qtde de pessoas que responderam péssimo: " + qtdePessimo;
document.getElementById("porcentagem").innerHTML = "Porcentagem de pessoas que responderam ótimo ou bom: " + porcOtBom + "%";
document.getElementById("mulher").innerHTML = "Qtde de mulheres: " + qtdeMulher;
document.getElementById("homem").innerHTML = "Qtde de homens: " + qtdeHomem;