if (window.location.pathname !== '/paginas/carrito.html') {
    cesta = JSON.parse(localStorage.getItem('cesta')) || [];
}


if (localStorage.getItem('cesta') === null) {
    localStorage.setItem('cesta', JSON.stringify([]));
}

const carritoHover = document.querySelector('#carritoHover');
const contenidoOriginal = carritoHover.innerHTML;

carritoHover.addEventListener('mouseover', (e) => {
    let recuentoProductos = {};

    cesta.forEach((producto) => {
        if (!recuentoProductos[producto.nombre]) {
            recuentoProductos[producto.nombre] = { cantidad: 0, precio: producto.precio };
        }

        recuentoProductos[producto.nombre].cantidad++;
    });

    e.target.innerHTML = `

    <a href="/paginas/carrito.html">🛒</a>
    <div 
    style="
    display: flex;
    flex-direction: column;
    background-color: #333;
    padding: 10px;
    position: absolute;
    top: 70px;
    right: 0;"
    >
    `
        +
        Object.entries(recuentoProductos).map(([nombre, producto]) => {
            return `
            <p>${nombre} x ${producto.cantidad}</p>
        `;
        }).join('')
        +
        `
    </div>
    `;
});

carritoHover.addEventListener('mouseout', (e) => {
    e.target.innerHTML = contenidoOriginal;
});
