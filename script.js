const botonLavanda = document.querySelector("#lavanda");
botonLavanda.addEventListener("click", function(){
    cambiarColor("lavender");
});

const botonRosa = document.querySelector("#rosa");
botonRosa.addEventListener("click", function(){
    cambiarColor("pink");
});

const botonVerde = document.querySelector("#verde");
botonVerde.addEventListener("click", function(){
    cambiarColor("green");
});

const mensaje = document.querySelector("#mensaje");


function cambiarColor(color){
    switch(color){
        case "lavender":
            document.body.style.backgroundColor = "lavender";
            mensaje.textContent = "Has elegido el lavanda, qué bonito!";
            break;
        case "pink":
            document.body.style.backgroundColor = "pink";
            mensaje.textContent= "El rosa te sienta fenomenal!";
            break;
        case "green":
            document.body.style.backgroundColor = "green";
            mensaje.textContent = "Este color tiene personalidad, no?";
            break;
        default:
            console.log("Color no reconocido");
    }
}

