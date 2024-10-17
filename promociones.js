document.addEventListener('DOMContentLoaded', () => {
    console.log('promociones-container cargado');

    const promocionesContainer = document.getElementById('promociones-container');
    const prevButton = document.getElementById('prev-promociones');
    const nextButton = document.getElementById('next-promociones');

    if (!promocionesContainer) {
        console.error('No se encontró el contenedor de promociones con ID "promociones-container"');
        return;
    }

    if (!prevButton || !nextButton) {
        console.error('No se encontraron los botones de navegación para el carrusel');
        return;
    }

    const promociones = [
        { 
            nombre: "Latte y Cookie de Nutella", 
            precio: "$7000", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLhj3bok3WSEV_GZOUjiOvzCfHix49n1snQ&s" 
        },
        { 
            nombre: "Cappuccino y Torta Tofi", 
            precio: "$8500", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqoKolqQoGunrXkoB7faMHjmHaIEBZjOIF4Q&s" 
        },
        { 
            nombre: "Submarino y Cheesecake de Frutos Rojos", 
            precio: "$8000", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcgBtIv1xSHQxjkdS3gFXcfZTvJC25AcfZw&s" 
        },
        { 
            nombre: "Mocaccino y Cookie Red Velvet", 
            precio: "$7000", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHijKf1mYDHH8PIihE3sK0jw6nS4wFcdiXQ&s"
        },
        { 
            nombre: "Frappe y medialuna de jyq", 
            precio: "$6300", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQN2vaCcNfOuWqU9NuljHjkBdk28hmll36Q&s" 
        },
        { 
            nombre: "Macchiato y tarta de frutilla", 
            precio: "$9000", 
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ptEbgxBScWyh_rKbYplhhhSxvRBj1A6hrA&s" 
        }
    ];

    const itemWidth1 = 220;
    let currentIndex = 0;
    const itemsToShow1 = 3;

    function mostrarPromociones(promociones, promocionesContainer) {
        promocionesContainer.innerHTML = ''; 
        promociones.forEach(promo => {
            const promoDiv = document.createElement('div');
            promoDiv.classList.add('promociones');

            const img1 = document.createElement('img');
            img1.src = promo.imagen;
            img1.alt = promo.nombre;
            img1.classList.add('promociones-imagen');
            promoDiv.appendChild(img1);

            const titulo1 = document.createElement('h2');
            titulo1.textContent = promo.nombre;
            titulo1.classList.add('titulo1');
            promoDiv.appendChild(titulo1);

            const precio1 = document.createElement('span');
            precio1.textContent = promo.precio; 
            precio1.classList.add('precio1');
            promoDiv.appendChild(precio1);

            const botonAgregar1 = document.createElement('button');
            botonAgregar1.textContent = 'Agregar al Carrito';
            botonAgregar1.classList.add('add-to-cart');
            botonAgregar1.addEventListener('click', () => agregarAlCarrito1(promo));
            promoDiv.appendChild(botonAgregar1);

            promocionesContainer.appendChild(promoDiv);
        });

        promocionesContainer.style.width = `${promociones.length * itemWidth1}px`;
    }

    function updateCarousel(promocionesContainer, currentIndex) {
        promocionesContainer.style.transform = `translateX(-${currentIndex * itemWidth1}px)`;
    }

    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel(promocionesContainer, currentIndex);
        }
    }

    function slideNext() {
        if (currentIndex < promociones.length - itemsToShow1) {
            currentIndex++;
            updateCarousel(promocionesContainer, currentIndex);
        }
    }

    function agregarAlCarrito1(promo) {
        let carrito1 = JSON.parse(localStorage.getItem('carrito')) || [];

        const promocionEnCarrito = carrito1.find(item => item.nombre === promo.nombre);

        if (promocionEnCarrito) {
            promocionEnCarrito.cantidad++;
        } else {
            carrito1.push({ 
                nombre: promo.nombre, 
                precio: promo.precio, 
                cantidad: 1,
            });
        }

        localStorage.setItem('carrito', JSON.stringify(carrito1));

        alert(`${promo.nombre} ha sido agregado al carrito con un precio de ${promo.precio}`);
    }

    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);

    mostrarPromociones(promociones, promocionesContainer);
});
