let cartas = [];
let qtd = 0;
let contClick = 0;
let ganhar = 0;
let timer = 0;
let idTimer;

let cartaUm = false;
let cartaDois = false;

const imgVerso = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];

function inciarJogo() {
    qtd = Number(prompt("Escolha o numero de cartas entre 4 a 14"));
    let proseguir = 0;
    while(proseguir < 1) {
        
        if(qtd%2 === 0 && qtd > 3 && qtd <15){
            proseguir ++;
        }else{
            qtd = Number(prompt("Escolha um numero par de cartas entre 4 a 14"));}
    }
    timer = 0
    document.querySelector("main").innerHTML="";

    criarCartas();
    cartas.sort(comparador);

    for(let i = 0; i < qtd; i ++) {
        document.querySelector("main").innerHTML += cartas[i]
    }
    timer = 0
    cronometro()

}

function criarCartas(){
    let verso = 0;
    imgVerso.sort(comparador);

    for(let i = 0; i < (qtd/2); i ++){
        let cartaTemplate = `<div class="carta" ">
                                <div class="face frente" onclick="virarCarta(this)"><img src="./src/images/front.png" alt=""></div>
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
    
    

    if (cartaDois == false) {
        cartaDois = elemento.parentNode;
        elemento.parentNode.classList.add("virar-carta");
        contClick++;
    }else if(cartaUm == false){
        cartaUm = elemento.parentNode;
        elemento.parentNode.classList.add("virar-carta");
        contClick++;

        setTimeout(compararCartas, 1000)
        console.log("rodei")
    }

}

function compararCartas() {

    if(cartaDois.innerHTML == cartaUm.innerHTML) {
        ganhar++

    }else{
        cartaUm.classList.remove("virar-carta")
        cartaDois.classList.remove("virar-carta")
    }
    limpar()
    terminarJogo()
    
    
}

function limpar() {
    cartaDois = false;
    cartaUm = false;
}

function cronometro() {
    idTimer = setInterval(function() {
        timer++
        document.querySelector(".timer").innerHTML = timer;
    },1000)
}

function terminarJogo() {
    if(ganhar === (qtd/2)) {
        clearInterval(idTimer);
        alert(`Voc?? ganhou em ${timer} segundos com ${contClick} jogadas!`)

        let recome??ar = prompt("Gostaria de recome??ar? (sim/n??o)");

        if(recome??ar.toLowerCase() === "sim") {
            ganhar = 0;
            contClick = 0;
            cartas = [];
                    
            inciarJogo();
        }else if(recome??ar.toLowerCase() === "n??o"){
            alert("Obrigado por jogar!")
        }else {
            
            alert("Digite apenas sim ou n??o")
            while(ganhar !== 0) {
                recome??ar = prompt("Gostaria de recome??ar? (sim/n??o)");
                if(recome??ar.toLowerCase() === "sim") {
                    ganhar = 0;
                    contClick = 0;
                    cartas = [];
                    
                    inciarJogo();
                }else if(recome??ar.toLowerCase() === "n??o"){
                    alert("Obrigado por jogar!")
                    ganhar = 0;
                }
                
            }
        }
    }
}

inciarJogo()