function inciarJogo() {
    let qtd = prompt("quantas cartas deseja?");
    let carta = document.querySelector("main")
    carta.innerHTML = ""

    for(let i = 0; i < qtd; i++)
        carta.innerHTML += `    <div class="carta" onclick="virarCarta(this)">
                                    <img src="./src/images/front.png" alt="">
                                </div>
    `
}

function virarCarta(elemento) {
    elemento.classList.toggle("virar-carta");
}

inciarJogo()