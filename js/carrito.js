// Array para almacenar los productos agregados al carrito
let carrito = [];
var dNombre=window.datosEnviados.nombre;
console.log(dNombre);
// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio, id, url, cantidad) {
    const producto = {
        id: id,
        url: `${url}`,
        nombre: `${nombre}`,
        precio: precio, // Ejemplo de precio basado en el ID
        cantidad: `${cantidad}`,
        descripcion: `${nombre}`
    };
    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById('tablaCarrito');
    listaCarrito.innerHTML = '';

    let total = 0;

    carrito.forEach(producto => {

        const itemDiv = document.createElement('div');
        itemDiv.className = 'imgProducto';

        const item = document.createElement('tr');
        item.className = 'tr1';
        const itemImagen = document.createElement('img');
        itemImagen.src = `${producto.url}`;
        itemImagen.alt = `${producto.alt}`;
        const itemImg = document.createElement('td');
        itemImg.className = 'td1';
        itemImg.rowSpan = 2;
        const item1Img = document.createElement('td');
        item1Img.className = 'td2';
        item1Img.textContent = `${producto.nombre}`;
        const item2Img = document.createElement('td');
        item2Img.className = 'td3';
        item2Img.textContent = "";
        const item3Img = document.createElement('td');
        item3Img.className = 'td4';
        item3Img.textContent = `${producto.precio}`;

        const item2 = document.createElement('tr');
        item2.className = 'tr2';

        const item4Img = document.createElement('td');
        item4Img.className = 'td5';
        const itemBotonMenos = document.createElement('button');
        itemBotonMenos.textContent = '-';

        const item5Img = document.createElement('td');
        item5Img.className = 'td6';
        item5Img.textContent = `${producto.cantidad}`;

        const item6Img = document.createElement('td');
        item6Img.className = 'td7';
        const itemBotonMas = document.createElement('button');
        itemBotonMas.textContent = '+';

        itemDiv.appendChild(itemImagen);
        itemImg.appendChild(itemDiv);
        item.appendChild(itemImg);

        item.appendChild(item1Img);

        item.appendChild(item2Img);

        item.appendChild(item3Img);

        listaCarrito.appendChild(item);

        item4Img.appendChild(itemBotonMenos);
        item2.appendChild(item4Img);

        item2.appendChild(item5Img);

        item6Img.appendChild(itemBotonMas)
        item2.appendChild(item6Img);

        listaCarrito.appendChild(item2);
        total += producto.precio;
    });

    document.getElementById('total').textContent = total;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}
function deleteCarrito(productoId) {
    carrito = carrito.filter(producto => producto.id !== productoId);
    mostrarCarrito();
}