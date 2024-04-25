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
