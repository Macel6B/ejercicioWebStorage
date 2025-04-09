// Index

const btnGuardar = document.getElementById("btnGuardar");
const inputNombre = document.getElementById("inputNombre");

btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("inputNombre", inputNombre.value);
});