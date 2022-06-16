const cartas = [];
let qtd = 0

const imgVerso = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

function inciarJogo() {
    qtd = Number(prompt("Escolha o numero de cartas entre 4 a 14"));
    let proseguir = 0;
    while(proseguir < 1) {
        
        if(qtd%2 === 0 && qtd > 3 && qtd <15){
            proseguir ++;
        }else{
            qtd = Number(prompt("Escolha o numero de cartas entre 4 a 14"));}
    }

    document.querySelector("main").innerHTML="";

    criarCartas();
    cartas.sort(comparador);

    for(let i = 0; i < qtd; i ++) {
        document.querySelector("main").innerHTML += cartas[i]
    }

    

}

function criarCartas(){
    let verso = 0;
    imgVerso.sort(comparador);

    for(let i = 0; i < (qtd/2); i ++){
        let cartaTemplate = `<div class="carta" onclick="virarCarta(this)">
                                <div class="face frente"><img src="./src/images/front.png" alt=""></div>
                                <div class="face verso"><img src="./src/images/${imgVerso[verso]}" alt=""></div>
                            </div>`;
        
        cartas.push(cartaTemplate);
        cartas.push(cartaTemplate);
        verso++
        
    }

}

function comparador() { 
	return Math.random() - 0.5; 
}

function virarCarta(elemento) {
    elemento.classList.toggle("virar-carta");
    elemento.querySelector(".verso").classList.toggle("sumiu");
    elemento.querySelector(".frente").classList.toggle("sumiu")
}

inciarJogo()