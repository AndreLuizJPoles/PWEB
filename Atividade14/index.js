var mai = document.getElementById("maiusculo")
var min = document.getElementById("minusculo")
var texto = document.getElementById("texto")

mai.addEventListener("change", maiusculo)
min.addEventListener("change", minusculo)

function maiusculo() {
    if (mai.checked) {
        min.checked = false
        texto.value = texto.value.toUpperCase()
    }

}

function minusculo() {
    if (min.checked) {
        mai.checked = false
        texto.value = texto.value.toLowerCase()
    }
}