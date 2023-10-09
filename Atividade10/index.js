function maiorNum(args) {
    return Math.max(args[0], args[1], args[2])
}

function ordena(args) {
    args.sort(function (a, b) {
        return a - b;
    });
    return args
}

function executar() {
    var vetor = []

    vetor[0] = document.getElementById("num1").value
    vetor[1] = document.getElementById("num2").value
    vetor[2] = document.getElementById("num3").value

    var maior = maiorNum(vetor)
    var ordenado = ordena(vetor)

    document.getElementById("maior").innerHTML = "Maior Número: " + maior
    document.getElementById("ordenado").innerHTML = "Ordenado: " + ordenado


}