document.addEventListener('DOMContentLoaded', function() {
    // Cargar el archivo JSON
    fetch('../data/productos.json')
        .then(response => response.json())
        .then(data => {
            const carrusel = document.getElementById('carrusel');
            data.forEach(producto => {
                const item = document.createElement('div');
                item.className = 'carrusel-item';
                item.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>$${producto.precio.toFixed(2)}</p>
                    <p>${producto.descripcion}</p>
                    <button onclick="agregarAlCarrito('${producto.nombre}')">Agregar al Carrito</button>
                `;
                carrusel.appendChild(item);
            });
        })
        .catch(error => console.error('Error cargando los productos:', error));
});

function agregarAlCarrito(nombreProducto) {
    const carritoLista = document.getElementById('carrito-lista');
    const item = document.createElement('li');
    item.textContent = nombreProducto;
    carritoLista.appendChild(item);
}