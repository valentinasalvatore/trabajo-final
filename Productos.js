const productos1 = [
    { nombre: "Latte", descripcion: "Uno o dos shots de espresso con leche al vapor y una fina capa de leche espumosa encima", precio: "$3000", imagen: "https://www.arte-latte.com/storage/2020/12/latte-scaled.jpg" },
    { nombre: "Cappuccino", descripcion: "Expreso, vapor y espuma de leche a partes iguales", precio: "$2500", imagen: "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2022/Capuccino.jpg.jpeg" },
    { nombre: "Americano", descripcion: "Un café que consiste en partes exactamente iguales de espresso y agua", precio: "$2000", imagen: "https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg" },
    { nombre: "Mocaccino", descripcion: "Lleva expreso, leche vaporizada y chocolate", precio: "$2800", imagen: "https://images.aws.nestle.recipes/original/49babf3c11f5d0d693ff869b532212e1_mocaccino.jpg" },
    { nombre: "Macchiato", descripcion: "Expreso con una pequeña cantidad de leche caliente y espumada", precio: "$2300", imagen: "https://athome.starbucks.com/sites/default/files/styles/recipe_banner_xlarge/public/2024-05/CaramelMacchiato_RecipeHeader_848x539_@2x.jpg.webp" },
    { nombre: "Submarino", descripcion: "Lleva leche caliente con una barra de chocolate que se derrita adentro", precio: "$2400", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoN-5HwG6q_tdZEf3KxRWCtKnsUmHHVa_kYw&s"},
    { nombre: "Frappe", descripcion: "Esta bebida es un café mezclado con leche, azúcar, café y hielo", precio: "$3000", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgajC8HtnK6eNFm1gosnpsG5-TSEGJhAZ4Xw&s"}
];

const productos2 = [
    { nombre: "Chocotorta", descripcion: "Una torta a base de galletitas chocolina con dulce de leche y queso crema", precio: "$4500", imagen: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg" },
    { nombre: "Cheesecake de Frutos Rojos", descripcion: "Torta con base de galletita y frutos rojos", precio: "$4500", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkiggyAGHb1ayCBnlTlaztMIKNCjV8oHIsA&s" },
    { nombre: "Cookie Red Velvet", descripcion: "Masa blanda de color rojizo con chips de chocolate blanco", precio: "$2200", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4NvDvV9AzFuoMdkYgQ4sz7kHfs1gUUOH2g&s" },
    { nombre: "Torta tofi", descripcion: "Torta hecha a dulce de leche y chocolate amargo", precio: "$3200", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8WP9dzzWscGXvEV2hJLeUG573r1CJNJ8DA&s" },
    { nombre: "Cookie nutella", descripcion: "Masa blanda con relleno de nutella", precio: "$2200", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpajyJ8cU4VXvqsyPQVpoJW1pfRFmVo9Pyqg&s" },
    { nombre: "Tarta de frutilla", descripcion: "Base de galleta con dulce de leche y crema con cremas arriba", precio: "$3500", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHCfm7c3c3dFntAoyTleSYT0G2FEP7pdtbQ&s"},
    { nombre: "Medialuna de jyq", descripcion: "Tiene una forma en media luna. Su exterior es dorado y crujiente, con una textura hojaldrada que contiene por dentro jamon y queso", precio: "$2000", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZTrBICxtoiZumiK_Gv7Z_Zq9yHT5iVD5OA&s"}
];

const itemWidth = 220;
let currentIndex1 = 0;
let currentIndex2 = 0;
const itemsToShow = 3; 

function mostrarProductos(productos, productosContainer) {
    productosContainer.innerHTML = ''; 
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.classList.add('producto-imagen');
        productoDiv.appendChild(img);

        const titulo = document.createElement('h2');
        titulo.textContent = producto.nombre;
        productoDiv.appendChild(titulo);

        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
        productoDiv.appendChild(descripcion);

        const precio = document.createElement('span');
        precio.textContent = `$${producto.precio}`; 
        precio.classList.add('precio');
        productoDiv.appendChild(precio);

        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al Carrito';
        botonAgregar.addEventListener('click', () => agregarAlCarrito(producto));
        productoDiv.appendChild(botonAgregar);

        productosContainer.appendChild(productoDiv);
    });

    productosContainer.style.width = `${productos.length * itemWidth}px`;
}

function updateCarousel(productosContainer, currentIndex) {
    productosContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function slidePrev1() {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateCarousel(document.getElementById('productos-container-1'), currentIndex1);
    }
}

function slideNext1() {
    if (currentIndex1 < productos1.length - itemsToShow) {
        currentIndex1++;
        updateCarousel(document.getElementById('productos-container-1'), currentIndex1);
    }
}

function slidePrev2() {
    if (currentIndex2 > 0) {
        currentIndex2--;
        updateCarousel(document.getElementById('productos-container-2'), currentIndex2);
    }
}

function slideNext2() {
    if (currentIndex2 < productos2.length - itemsToShow) {
        currentIndex2++;
        updateCarousel(document.getElementById('productos-container-2'), currentIndex2);
    }
}

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoEnCarrito = carrito.find(item => item.nombre === producto.nombre);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ 
            nombre: producto.nombre, 
            descripcion: producto.descripcion, 
            precio: producto.precio, 
            cantidad: 1 
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`${producto.nombre} ha sido agregado al carrito con un precio de $${producto.precio}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const productosContainer1 = document.getElementById('productos-container-1');
    const productosContainer2 = document.getElementById('productos-container-2');
    const prevButton1 = document.getElementById('prev-1');
    const nextButton1 = document.getElementById('next-1');
    const prevButton2 = document.getElementById('prev-2');
    const nextButton2 = document.getElementById('next-2');

    if (!productosContainer1 || !productosContainer2 || !prevButton1 || !nextButton1 || !prevButton2 || !nextButton2) {
        console.error('No se encontraron los contenedores o botones del carrusel');
        return;
    }

    mostrarProductos(productos1, productosContainer1);
    mostrarProductos(productos2, productosContainer2);

    prevButton1.addEventListener('click', slidePrev1);
    nextButton1.addEventListener('click', slideNext1);
    prevButton2.addEventListener('click', slidePrev2);
    nextButton2.addEventListener('click', slideNext2);
});
