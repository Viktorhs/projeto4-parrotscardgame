function inciarJogo() {
    let qtd = Number(prompt("Escolha o numero de cartas entre 4 a 14"));
    let proseguir = 0;
    while(proseguir < 1) {
        
        if(qtd%2 === 0 && qtd > 3 && qtd <15){
            proseguir ++;
        }else{
            qtd = Number(prompt("Escolha o numero de cartas entre 4 a 14"));}
    }

    let carta = document.querySelector("main")
    carta.innerHTML = ""

    for(let i = 0; i < qtd; i++)
        carta.innerHTML += `<div class="carta" onclick="virarCarta(this)">
                                <img src="./src/images/front.png" alt="">
                            </div>`
}

function virarCarta(elemento) {
    elemento.classList.toggle("virar-carta");
}

inciarJogo()