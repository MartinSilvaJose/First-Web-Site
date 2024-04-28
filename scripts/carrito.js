//Mostrar las celdas de la tabla con cada articulo de la cesta

const cesta = JSON.parse(localStorage.getItem('cesta')) || [];

// Crear un objeto para mantener el recuento de cada producto

let recuentoProductos = {};

cesta.forEach((producto) => {
    if (!recuentoProductos[producto.nombre]) {
        recuentoProductos[producto.nombre] = { cantidad: 0, precio: producto.precio };
    }

    recuentoProductos[producto.nombre].cantidad++;
});


const tabla = document.querySelector('.tabla');

Object.entries(recuentoProductos).forEach(([nombre, producto]) => {
    tabla.appendChild(htmlToElement(`
        <tr>
            <td>${nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td class="precioTotal">${producto.precio * producto.cantidad}</td>
        </tr>
    `));
});

// Calcular el total de la cesta
let precioTotal = 0;
document.querySelectorAll('.precioTotal').forEach((precio) => {
    precioTotal += parseFloat(precio.textContent);
});
document.querySelector('#total').innerHTML = precioTotal;
