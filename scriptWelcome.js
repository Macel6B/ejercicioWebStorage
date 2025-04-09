// Welcome

var btnEliminar = document.getElementById("btnEliminar");
var mensajeEsp = document.getElementById("mensajeEsp");

window.addEventListener("load", function(event){
    event.preventDefault();
    var nombreGuardado = localStorage.getItem("inputNombre");
    if(nombreGuardado !== null) {
        mensajeEsp.innerText = `Hola ${nombreGuardado}, bienvenidx de nuevo`;
    } else {
        mensajeEsp.innerText = "Por favor ve al index e ingresa tu nombre";
    }
});

btnEliminar.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("inputNombre");
    mensajeEsp.innerText = "Por favor ve al index e ingresa tu nombre";
});