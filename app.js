function sortear() {s
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (quantidade == null || de == null || ate == null || isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert("Nenhum campo pode ficar em branco ou conter valores inválidos.");
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert("Quantidade é maior que o intervalo inserido (de -> para)");
        return;
    }

    let listaSorteados = [];
    while (listaSorteados.length < quantidade) {
        let numeroSorteado = Math.floor(Math.random() * (ate - de + 1)) + de;
        if (!listaSorteados.includes(numeroSorteado)) {
            listaSorteados.push(numeroSorteado);
        }
    }

    document.getElementById("resultado").innerHTML = "Os números sorteados foram: " + listaSorteados.join(", ");
}

function reiniciar() {
    document.getElementById("quantidade").value = null;
    document.getElementById("de").value = null;
    document.getElementById("ate").value = null;
    document.getElementById("resultado").innerHTML = "";
}