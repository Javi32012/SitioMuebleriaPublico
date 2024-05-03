function EnviarAlCarrito( nombre, precio, id, url, cantidad) {
  agregarAlCarrito(nombre,precio,id,url,cantidad);
  alert(carrito[carrito.length - 1].precio);/*
  window.location.href = '../../Carrito/index.html';*/
  
}