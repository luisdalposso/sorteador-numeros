function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let listaSorteados = [];
    
    if (quantidade > (ate - de)){
        alert("Quantidade é maior que o intervalo inserido (de -> para)")
        return;
    }

    while (listaSorteados.length < quantidade){
        let numeroSorteado = Math.floor(Math.random() * (ate - de + 1) + de);
        if(listaSorteados.includes(numeroSorteado)){
            console.log("ja estava na lista")
        } else {
            listaSorteados.push(numeroSorteado)
        }
    }

    document.getElementById("resultado").innerHTML = "Os numeros sorteados foram:" + listaSorteados;

}

function reiniciar(){
    document.getElementById("quantidade").value = null;
    document.getElementById("de").value = null;
    document.getElementById("ate").value = null;
}