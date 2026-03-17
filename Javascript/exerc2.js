let numeroRandomico = Math.floor(Math.random() * 100);

console.log(numeroRandomico);

function acertaai() {

    valor = document.getElementById("numeroAdivinhado").value;

    if (valor == numeroRandomico) {
        document.getElementById("numeroAdivinhado").style.setProperty("background-color", "green");
    }
    else {
        document.getElementById("numeroAdivinhado").style.setProperty("background-color", "red");
    }
}
