function changeText(obj, text) {
    obj.innerText = text;
}

function changeColor(obj,col) {
    obj.style.color = col;
    }

function textYColor(obj,text,col){
    changeColor(obj,col);
    changeText(obj,text);
}

function cambiar(){
    document.getElementById("hola").innerText="Sobre mi";
    document.getElementById("soy").innerText="Trabajos";
    document.getElementById("leo").innerText="Contacto";
}

document.getElementById("btn").onclick=function(){
    cambiar();
}
