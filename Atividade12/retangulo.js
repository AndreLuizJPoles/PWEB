function calcArea(){
    var ret = new Retangulo()

    document.getElementById("resultado").innerHTML = "Resultado: " + (ret.largura * ret.altura)
}

function Retangulo(){
    this.altura = document.getElementById("altura").value
    this.largura = document.getElementById("largura").value
}