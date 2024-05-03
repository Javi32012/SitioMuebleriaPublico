function fun_imagenUno() {
    // Obtener el contenedor grande y la imagen grande
    var contenedorGrande = document.getElementById('cajonImagen');
    var imagenGrande = document.getElementById('imagenGlobal');

    // Cambiar la fuente de la imagen grande
    imagenGrande.src = '../../../img/ImgTocadoresTC/tcbcjsv1.jpg';
}

function fun_imagenDos() {
    // Obtener el contenedor grande y la imagen grande
    var contenedorGrande = document.getElementById('cajonImagen');
    var imagenGrande = document.getElementById('imagenGlobal');

    // Cambiar la fuente de la imagen grande
    imagenGrande.src = '../../../img/ImgTocadoresTC/tcbcjsv2.jpg';
}

function fun_imagenTres() {
    // Obtener el contenedor grande y la imagen grande
    var contenedorGrande = document.getElementById('cajonImagen');
    var imagenGrande = document.getElementById('imagenGlobal');

    // Cambiar la fuente de la imagen grande
    imagenGrande.src = '../../../img/ImgTocadoresTC/tcbcjsv3.jpg';
}

function fun_imagenCinco() {
    // Obtener el contenedor grande y la imagen grande
    var contenedorGrande = document.getElementById('cajonImagen');
    var imagenGrande = document.getElementById('imagenGlobal');

    // Cambiar la fuente de la imagen grande
    imagenGrande.src = '../../../img/ImgTocadoresTC/tcbcjsv4.jpg';
}

function fun_imagenSeis() {
    // Obtener el contenedor grande y la imagen grande
    var contenedorGrande = document.getElementById('cajonImagen');
    var imagenGrande = document.getElementById('imagenGlobal');

    // Cambiar la fuente de la imagen grande
    imagenGrande.src = '../../../img/ImgTocadoresTC/tcbcjsv2.jpg';
}

function fun_carrito() {
    location.href = '../../../Carrito/index.html';
}

function seleccionarBoton(url, idBoton) {
    // Obtener todos los botones
    var todosLosBotones = document.querySelectorAll('.boton');

    // Iterar sobre todos los botones y aplicar estilos
    todosLosBotones.forEach(function (boton) {
        if (boton.id === idBoton) {
            boton.classList.add('boton-seleccionado');
            boton.classList.remove('boton-no-seleccionado');
        } else {
            boton.classList.remove('boton-seleccionado');
            boton.classList.add('boton-no-seleccionado');
        }
    });

    // Guardar el estado de selección (opcional)
    localStorage.setItem('botonSeleccionado', idBoton);
    location.href = url;
}
function verificar(resultado) {
    var botonMenos = document.getElementById('botonMenos');
    if (resultado >1) {
        botonMenos.classList.remove('boton-inabilitar')
        botonMenos.classList.add('botonMenos');
    } else {
        botonMenos.classList.remove('botonMenos');
        botonMenos.classList.add('boton-inabilitar');
        document.getElementById('botonMenos').disabled = true;
    }
}
function funcionMenos() {
    var valorDiv = document.getElementById('cantidad');
    var valorInicial = parseFloat(valorDiv.innerHTML);
    var resultado = valorInicial - 1;
    valorDiv.innerHTML = resultado;
    precio(resultado);
    verificar(resultado);

}
function funcionMas() {
    var valorDiv = document.getElementById('cantidad');
    var valorInicial = parseFloat(valorDiv.innerHTML);
    var resultado = valorInicial + 1;
    valorDiv.innerHTML = resultado;
    precio(resultado);
    verificar(resultado);

}
function precio(cantidad) {
    var stringResultado=document.getElementById('cajonPrecioCantidad');
    var resultado = 3200*cantidad;
    stringResultado.innerHTML=resultado;
}