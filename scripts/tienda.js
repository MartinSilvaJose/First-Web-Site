// SIMULAMOS LA BBDD
const productos = [
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

openModal.forEach(newModal => {
    newModal.addEventListener('click', (e) => {
        e.target.parentElement.appendChild(modal);
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
            <a href="">Añadir a la cesta</a>
            <a href="">Comprar</a>
        </div>
        </div>
    </div>
`);