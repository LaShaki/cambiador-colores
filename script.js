const botones = document.querySelectorAll("[data-color]");
const mensaje = document.querySelector("#mensaje");

const mensajes = {
    lavender: "Has elegido el lavanda, me encanta!",
    pink: "Has elegido el rosa, maravilloso!",
    green: "Has elegido el verde, un color único!",
    blue: "Haz elegido el azulito"
};

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        cambiarColor(boton.dataset.color);
    });
});


function cambiarColor(color) {

    if(mensajes[color] !== undefined){
        document.body.style.backgroundColor = color;
        mensaje.textContent = mensajes[color];
    }else{
        console.log("Color no reconocido");
    }
}

console.log(mensajes.lavender);
console.log(mensajes.pink);
console.log(mensajes.green);