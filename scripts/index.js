// Funcionalidad de pulsar la flecha para arriba y que la pantalla suba arriba del todo

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        // Aquí puedes agregar la lógica que deseas ejecutar cuando se presiona la flecha hacia arriba
        window.scrollTo(0, 0);
    }
});

document.getElementById('upEvent').addEventListener('click', function () {
    window.scrollTo(0, 0);
});


// Observer API
let section = document.querySelectorAll('.intersection');

function isVisible(entries) {
    let entry = entries[0];
    if (entry.isIntersecting) {
        console.log('Visible');
        entry.target.classList.add('active');
        setInterval(() => {
            section[1].classList.add('active');
        }, 1000);
        setInterval(() => {
            section[2].classList.add('active');
        }, 2000);
    }
}
let observer = new IntersectionObserver(isVisible, {});

Array.from(section).forEach((section) => {
    observer.observe(section);
});



// animacion para abrir el menu
const menu = document.querySelectorAll('.borrado');
document.querySelector('.openMenu').addEventListener('click', function () {
    if (this.textContent === '🔻') {
        this.textContent = '🔺';
        menu.forEach((element) => {
            element.classList.add('borrado');
        });
    } else {
        this.textContent = '🔻';
        Array.from(menu).forEach((element) => {
            element.classList.remove('borrado');
        });
    }
});