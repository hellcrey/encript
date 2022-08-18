const inputMensaje= document.querySelector("#mensaje");
const inputResultado= document.querySelector("#resultado");

const btnEncriptar=document.querySelector("#encriptar");
const btnDesencriptar=document.querySelector("#desencriptar");
const btnCopiar=document.querySelector("#copiar")
const btnEscuchar=document.querySelector("#escuchar")

function encriptar(){

    var mensaje= inputMensaje.value;
    
    
    if (inputMensaje.value==""){
        alert("no ha escrito un mensaje");
    }
     else{
        var mensajeEncriptado= mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober") 
    .replaceAll("a","ai")
    .replaceAll("u","ufat");

    inputResultado.value= mensajeEncriptado;

    inputMensaje.value=""
    ocultarmuneco();
     }
    
}

function desencriptar(){

    var mensajeEncriptado = inputMensaje.value;
    var mensaje= mensajeEncriptado

    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o") 
    .replaceAll("ai","a")
    .replaceAll("ufat","u");

    inputResultado.value= mensaje;

    inputMensaje.value=""
    ocultarmuneco();

}

var muneco=document.querySelector(".muneco")
var secmensaje=document.querySelector(".div2mens1")
var arearesultado=document.querySelector(".arearesultado")

function ocultarmuneco(){

    muneco.classList.add("ocultar");
    secmensaje.classList.add("ocultar")
    arearesultado.classList.add("aparecer")

}


function resetear(){
    muneco.classList.remove("ocultar")
    secmensaje.classList.remove("ocultar")
    arearesultado.classList.remove("aparecer")
}

function copiar(){

    var mensajeEncriptado=inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado)
    resetear();
}

function hablar(){
    var mensajeEncriptado=inputResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text=mensajeEncriptado;
    msg.lang="es-Es";
    window.speechSynthesis.speak(msg);
}

btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick=desencriptar;
btnCopiar.onclick=copiar;
btnEscuchar.onclick=hablar;