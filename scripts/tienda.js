// SIMULAMOS LA BBDD
const PRODUCTOS = [
    {
        id: 1,
        nombre: 'Taza',
        precio: 19.99,
    },
    {
        id: 2,
        nombre: 'Camiseta',
        precio: 24.95,
    },
    {
        id: 3,
        nombre: 'Figura',
        precio: 34.95
    },
    {
        id: 4,
        nombre: 'Llavero',
        precio: 12.99,
    },
    {
        id: 5,
        nombre: 'Anillo',
        precio: 16.99,
    }
];


// APLICAMOS EL MODAL A LA TIENDA
const openModal = document.querySelectorAll('.openModal');

let añadirCestaHandler = null; // Guarda la referencia al manejador del evento

openModal.forEach(newModal => {
    newModal.addEventListener('click', (e) => {
        e.target.parentElement.appendChild(modal);

        let classAñadir = document.querySelectorAll('.añadirCesta');

        // Si existe un manejador de evento anterior, lo removemos
        if (añadirCestaHandler) {

            Array.from(classAñadir).forEach((element) => {
                element.removeEventListener('click', añadirCestaHandler);
            });
        }

        let pulsado = e.target.parentElement.dataset.articulo;


        añadirCestaHandler = () => {
            let añadir = PRODUCTOS.find(producto => producto.id == pulsado);
            let cesta = JSON.parse(localStorage.getItem('cesta')) || [];
            cesta.push(añadir);
            console.log(cesta);
            localStorage.setItem('cesta', JSON.stringify(cesta));
            modal.remove();
        };

        Array.from(classAñadir).forEach((element) => {
            element.addEventListener('click', añadirCestaHandler);
        });

        document.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });
    });
});


// CREACION DEL MODAL CON JAVASCRIPT
function htmlToElement(html) {

    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;

}

const modal = htmlToElement(`
    <div class="modal">
        <div class="modal-content">
            <span class="close">❌</span>
            <div class="elementosDestacados">
            <a class="añadirCesta">Añadir a la cesta</a>
            <a class="añadirCesta" href="/paginas/carrito.html" >Comprar</a>
        </div>
        </div>
    </div>
`);






