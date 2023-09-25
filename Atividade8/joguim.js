var jogador = 0, bot = 0;

while (1) {
    var jogadaJogador = prompt("Qual a sua escolha?(Pedra, Papel ou Tesoura)");
    var jogadaBot = Math.floor(Math.random() * 3 + 1); //1 = Pedra, 2 = Papel e 3 = Tesoura
    jogadaJogador = jogadaJogador.toUpperCase();

    var resultado = escolha(jogadaJogador, jogadaBot);

    if (resultado == 0) {
        alert("EMPATE!!!");
    }
    else if (resultado == 1) {
        alert("JOGADOR VENCEU!!!");
        jogador++;
    }
    else if (resultado == -1){
        alert("BOT VENCEU!!!");
        bot++;
    }
    else{
        alert("ENTRADA INVÁLIDA");
    }

    alert("JOGADOR: " + jogador + " X " + "BOT: " + bot);
}

function escolha(jogadaJogador, jogadaBot) {

    if (jogadaJogador === "PEDRA") {
        if (jogadaBot == 1) {
            return 0;
        }
        else if (jogadaBot == 2) {
            return -1;
        }
        else {
            return 1;
        }
    }
    else if (jogadaJogador === "PAPEL") {
        if (jogadaBot == 1) {
            return 1;
        }
        else if (jogadaBot == 2) {
            return 0;
        }
        else {
            return -1;
        }
    }
    else if (jogadaJogador === "TESOURA"){
        if (jogadaBot == 1) {
            return -1;
        }
        else if (jogadaBot == 2) {
            return 1;
        }
        else {
            return 0;
        }
    }
    else{
        return 2;
    }
}