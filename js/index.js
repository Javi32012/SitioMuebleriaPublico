
document.getElementById("formulario").addEventListener("submit", function (event) {
    let Nombre = document.getElementById("nombre").value
    let Telefono = document.getElementById("telefono").value
    let Correo = document.getElementById("correo").value
    let Mensaje = document.getElementById("mensajeTA").value

    let isValid = true;

    if (Nombre === "") {
        alert("faltan campos por rellenar");
        isValid = false
    } else {

    }
    if (Telefono === "") {

        alert("faltan campos por rellenar");
        isValid = false
    } else {

    }
    if (Correo === "") {

        alert("faltan campos por rellenar");
        isValid = false
    } else {

    }
    if (Mensaje === "") {

        alert("faltan campos por rellenar");
        isValid = false
    } else {

    }
    if (!isValid) {
        event.preventDefault();
    }
}
)/*
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}
function nextSlider() {
    currentSlide++;
    showSlide(currentSlide);
}
function prevSlider() {
    currentSlide--;
    showSlide(currentSlide);
}
showSlide(currentSlide);*/