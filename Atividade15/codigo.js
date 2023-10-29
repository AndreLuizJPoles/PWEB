function validar() {
    var nome = document.forms["formPrincipal"]["nome"].value;
    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    var email = document.forms["formPrincipal"]["email"].value;
    if (!email.includes("@") || !email.includes(".")) {
        alert("O e-mail deve ter os caracteres @ e .");
        return false;
    }

    var comentario = document.forms["formPrincipal"]["comentario"].value;
    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    var pesquisa = document.forms["formPrincipal"]["pesquisa"].value;
    if (pesquisa === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à está página!");
    }

    return true;
}

document.forms["formPrincipal"].addEventListener("submit", validar);
