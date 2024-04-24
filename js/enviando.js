var nombreGE;
var precioGE;
var idGE;
var urlGE;
var cantidadGE;

const datosEnviados = { nombre: nombreGE, precio: precioGE, id: idGE, url: urlGE, cantidad: cantidadGE };
window.datosEnviados=datosEnviados;

function EnviarAlCarrito(nombre, precio, id, url, cantidad) {
  nombreGE = nombre;
  precioGE = precio;
  idGE = id;
  urlGE = url;
  cantidadGE = cantidad;
  /*
  const importScript = document.getElementById('newScript');
  importScript.innerHTML='';

  const script=document.createElement('script');
  script.src='../../JS/carrito.js';
  
  importScript.appendChild(script);*/

  window.location.href='../../Carrito/index.html';
}