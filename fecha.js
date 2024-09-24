const footer = document.getElementById("footer");
const parrafoFooter = document.createElement("p");
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = "Buenos Aires, Argentina "  + anioActual;
footer.appendChild(parrafoFooter);