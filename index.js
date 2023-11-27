
let pantallaInicio = document.getElementById("pantallaInicio");
let start = document.getElementById("start");
let conecta4 = document.getElementById("conecta4");
//Identificadores de las fichas segun la columna
let posicion1 = document.getElementById("posicion1");
let posicion2 = document.getElementById("posicion2");
let posicion3 = document.getElementById("posicion3");
let posicion4 = document.getElementById("posicion4");
let posicion5 = document.getElementById("posicion5");
let posicion6 = document.getElementById("posicion6");
let posicion7 = document.getElementById("posicion7");

//Ids de todos los huecos
let hueco1 = document.getElementById("hueco1");
let hueco2 = document.getElementById("hueco2");
let hueco3 = document.getElementById("hueco3");
let hueco4 = document.getElementById("hueco4");
let hueco5 = document.getElementById("hueco5");
let hueco6 = document.getElementById("hueco6");
let hueco7 = document.getElementById("hueco7");
let hueco8 = document.getElementById("hueco8");
let hueco9 = document.getElementById("hueco9");
let hueco10 = document.getElementById("hueco10");
let hueco11 = document.getElementById("hueco11");
let hueco12 = document.getElementById("hueco12");
let hueco13 = document.getElementById("hueco13");
let hueco14 = document.getElementById("hueco14");
let hueco15 = document.getElementById("hueco15");
let hueco16 = document.getElementById("hueco16");
let hueco17 = document.getElementById("hueco17");
let hueco18 = document.getElementById("hueco18");
let hueco19 = document.getElementById("hueco19");
let hueco20 = document.getElementById("hueco20");
let hueco21 = document.getElementById("hueco21");
let hueco22 = document.getElementById("hueco22");
let hueco23 = document.getElementById("hueco23");
let hueco24 = document.getElementById("hueco24");
let hueco25 = document.getElementById("hueco25");
let hueco26 = document.getElementById("hueco26");
let hueco27 = document.getElementById("hueco27");
let hueco28 = document.getElementById("hueco28");
let hueco29 = document.getElementById("hueco29");
let hueco30 = document.getElementById("hueco30");
let hueco31 = document.getElementById("hueco31");
let hueco32 = document.getElementById("hueco32");
let hueco33 = document.getElementById("hueco33");
let hueco34 = document.getElementById("hueco34");
let hueco35 = document.getElementById("hueco35");
let hueco36 = document.getElementById("hueco36");
let hueco37 = document.getElementById("hueco37");
let hueco38 = document.getElementById("hueco38");
let hueco39 = document.getElementById("hueco39");
let hueco40 = document.getElementById("hueco40");
let hueco41 = document.getElementById("hueco41");
let hueco42 = document.getElementById("hueco42");

//Turno jugadores
let jugador1 = true;
let jugador2 = false;

let array1 = [
    hueco36,hueco29,hueco22,hueco15,hueco8,hueco1
]
let array2=[
    hueco37,hueco30,hueco23,hueco16,hueco9,hueco2
]
let array3=[
    hueco38,hueco31,hueco24,hueco17,hueco10,hueco3
]
let array4=[
    hueco39,hueco32,hueco25,hueco18,hueco11,hueco4
]
let array5=[
    hueco40,hueco33,hueco26,hueco19,hueco12,hueco5
]
let array6=[
    hueco41,hueco34,hueco27,hueco20,hueco13,hueco6
]
let array7=[
    hueco42,hueco35,hueco28,hueco21,hueco14,hueco7
]


function empezar(){
    pantallaInicio.style = "display:none";
    start.style = "display:none";
    conecta4.style = "display:flex";
}

function quitarPosicion1(){
    posicion1.style = "background:none"
}
function quitarPosicion2(){
    posicion2.style = "background:none"
}
function quitarPosicion3(){
    posicion3.style = "background:none"
}
function quitarPosicion4(){
    posicion4.style = "background:none"
}
function quitarPosicion5(){
    posicion5.style = "background:none"
}
function quitarPosicion6(){
    posicion6.style = "background:none"
}
function quitarPosicion7(){
    posicion7.style = "background:none"
}

function ponerPosicion1(){
    if(jugador1){
        posicion1.style = "background:red"
    }else{
        posicion1.style = "background:blue"
    }
}
function ponerPosicion2(){
    if(jugador1){
        posicion2.style = "background:red"
    }else{
        posicion2.style = "background:blue"
    }
}
function ponerPosicion3(){
    if(jugador1){
        posicion3.style = "background:red"
    }else{
        posicion3.style = "background:blue"
    }
}
function ponerPosicion4(){
    if(jugador1){
        posicion4.style = "background:red"
    }else{
        posicion4.style = "background:blue"
    }
}
function ponerPosicion5(){
    if(jugador1){
        posicion5.style = "background:red"
    }else{
        posicion5.style = "background:blue"
    }
}
function ponerPosicion6(){
    if(jugador1){
        posicion6.style = "background:red"
    }else{
        posicion6.style = "background:blue"
    }
}
function ponerPosicion7(){
    if(jugador1){
        posicion7.style = "background:red"
    }else{
        posicion7.style = "background:blue"
    }
}


function colocarFicha1(){
    for(let i = 0; i < array1.length; i++){
        if(jugador1){
            if(array1[i].style = "background:rgb(185, 181, 181)"){
                array1[i].style = "background:red";
                array1.shift();
                jugador1 = false;
                break;
            }
        }else{
            if(array1[i].style = "background:rgb(185, 181, 181)"){
                array1[i].style = "background:blue";
                array1.shift();
                jugador1 = true;
                break;
            }
        }
    }
}
function colocarFicha2(){
    for(let i = 0; i < array2.length; i++){
        if(jugador1){
            if(array2[i].style = "background:rgb(185, 181, 181)"){
                array2[i].style = "background:red";
                array2.shift();
                jugador1 = false;
                break;
            }
        }else{
            if(array2[i].style = "background:rgb(185, 181, 181)"){
                array2[i].style = "background:blue";
                array2.shift();
                jugador1 = true;
                break;
            }
        }
    }
}
function colocarFicha3(){
    for(let i = 0; i < array3.length; i++){
        if(jugador1){
            if(array3[i].style = "background:rgb(185, 181, 181)"){
                array3[i].style = "background:red";
                array3.shift();
                jugador1 = false;
                break;
            }
        }else{
            if(array3[i].style = "background:rgb(185, 181, 181)"){
                array3[i].style = "background:blue";
                array3.shift();
                jugador1 = true;
                break;
            }
        }
    }
}
function colocarFicha4(){
    for(let i = 0; i < array4.length; i++){
        if(jugador1){
            if(array4[i].style = "background:rgb(185, 181, 181)"){
                array4[i].style = "background:red";
                array4.shift();
                jugador1 = false;
                break;
            }
        }else{
            if(array4[i].style = "background:rgb(185, 181, 181)"){
                array4[i].style = "background:blue";
                array4.shift();
                jugador1 = true;
                break;
            }
        }
    }
}
function colocarFicha5(){
    for(let i = 0; i < array5.length; i++){
        if(jugador1){
            if(array5[i].style = "background:rgb(185, 181, 181)"){
                array5[i].style = "background:red";
                array5.shift();
                jugador1 = false;
                break;
            }
        }else{
            if(array5[i].style = "background:rgb(185, 181, 181)"){
                array5[i].style = "background:blue";
                array5.shift();
                jugador1 = true;
                break;
            }
        }
    }
}
function colocarFicha6(){
    for(let i = 0; i < array6.length; i++){
        if(jugador1){
            if(array6[i].style = "background:rgb(185, 181, 181)"){
                array6[i].style = "background:red";
                array6.shift();
                jugador1 = false;
                break;
            }
        }else{
            if(array6[i].style = "background:rgb(185, 181, 181)"){
                array6[i].style = "background:blue";
                array6.shift();
                jugador1 = true;
                break;
            }
        }
    }
}
function colocarFicha7(){
    for(let i = 0; i < array7.length; i++){
        if(jugador1){
            if(array7[i].style = "background:rgb(185, 181, 181)"){
                array7[i].style = "background:red";
                array7.shift();
                jugador1 = false;
                break;
            }
        }else{
            if(array7[i].style = "background:rgb(185, 181, 181)"){
                array7[i].style = "background:blue";
                array7.shift();
                jugador1 = true;
                break;
            }
        }
    }
}