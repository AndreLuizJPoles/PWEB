var titulo = document.getElementById("titulo-janela");
var janela = document.getElementById("janela");

janela.addEventListener("click", quebrar)
janela.addEventListener("mouseout", fechar)
janela.addEventListener("mouseover", abrir)

function quebrar(){
    titulo.innerHTML = "Janela Quebrada"
    janela.setAttribute("src", "./images/janela_quebrada.png")
}

function abrir(){
    titulo.innerHTML = "Janela Aberta"
    janela.src = "./images/janela_aberta.png"
}

function fechar(){
    titulo.innerHTML = "Janela Fechada"
    janela.src = "./images/janela_fechada.png"
}

function carrega(){
    janela.src = "./images/janela_fechada.png"
    titulo.innerHTML = "Abra a Janela"
}