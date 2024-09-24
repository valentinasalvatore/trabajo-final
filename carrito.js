document.addEventListener('DOMContentLoaded', () => {
    function mostrarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const carritoContainer = document.getElementById('carrito-container');
        const totalContainer = document.getElementById('total-container');

        if (!carritoContainer || !totalContainer) {
            console.error('No se encontraron los contenedores de carrito o total.');
            return;
        }

        carritoContainer.innerHTML = '';

        let total = 0;

        if (carrito.length === 0) {
            carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
            totalContainer.innerHTML = '<p>Total: $0</p>';
            return;
        }

        const productosAgrupados = {};

        carrito.forEach((item) => {
            if (productosAgrupados[item.nombre]) {
                productosAgrupados[item.nombre].cantidad += item.cantidad;
            } else {
                productosAgrupados[item.nombre] = { ...item };
            }
        });

        Object.values(productosAgrupados).forEach((item) => {
            const itemHTML = document.createElement('div');
            itemHTML.classList.add('producto-carrito');
            let precioNumerico = parseFloat(item.precio.replace('$', '').replace(',', ''));
            
            if (isNaN(precioNumerico)) {
                console.error(`Precio no válido para el producto ${item.nombre}: ${item.precio}`);
                precioNumerico = 0;
            }

            itemHTML.innerHTML = `
                <p>${item.nombre} (x${item.cantidad})</p>
                <p>Precio total: $${(precioNumerico * item.cantidad).toFixed(2)}</p>
            `;
            carritoContainer.appendChild(itemHTML);

            total += precioNumerico * item.cantidad;
        });

        totalContainer.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
    }

    function vaciarCarrito() {
        localStorage.removeItem('carrito');
        mostrarCarrito();
        alert('El carrito ha sido vaciado.');
    }

    
    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', vaciarCarrito);
    }
    
    const form = document.getElementById('infoForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            Swal.fire({
                title: '¡Pedido realizado!',
                text: 'Perfecto, tu pedido será entregado en un máximo de 30 minutos.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        });
    }
    mostrarCarrito();
});
