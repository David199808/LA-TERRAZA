import { Pedido } from "./pedido.js";
import { MENU } from "./menu-datos.js";
const pedidoNuevo = new Pedido();
const menu = document.querySelector(".menu");
const categorias = document.querySelector(".categorias__enlaces");
const contador = document.querySelector(".pedido__contador");
// Convierte 150000 en "$150.000"
const formatoPesos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
});
function actualizarContador() {
    if (contador) {
        contador.textContent = String(pedidoNuevo.contarUnidades());
    }
}
function crearTarjeta(plato) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("plato");
    if (plato.foto) {
        const foto = document.createElement("img");
        foto.classList.add("plato__imagen");
        foto.src = plato.foto;
        foto.alt = plato.nombre;
        tarjeta.append(foto);
    }
    const nombre = document.createElement("h3");
    nombre.classList.add("plato__titulo");
    nombre.textContent = plato.nombre;
    if (plato.descripcion) {
        const descripcion = document.createElement("p");
        descripcion.classList.add("plato__descripcion");
        descripcion.textContent = plato.descripcion;
        tarjeta.append(descripcion);
    }
    const precio = document.createElement("p");
    precio.classList.add("plato__precio");
    precio.textContent = formatoPesos.format(plato.precio);
    const boton = document.createElement("button");
    boton.classList.add("plato__boton");
    boton.dataset.id = String(plato.id);
    boton.textContent = "Agregar al pedido";
    boton.addEventListener("click", () => {
        pedidoNuevo.agregarPlato(plato);
        actualizarContador();
    });
    tarjeta.append(nombre, precio, boton);
    return tarjeta;
}
// ------ Dibujar Menú ----- //
function dibujarMenu() {
    MENU.forEach((seccion) => {
        const seccionHTML = document.createElement("section");
        seccionHTML.id = seccion.id;
        const tituloHTML = document.createElement("h2");
        tituloHTML.textContent = seccion.titulo;
        seccionHTML.append(tituloHTML);
        seccion.items.forEach((plato) => {
            const tarjeta = crearTarjeta(plato);
            seccionHTML.append(tarjeta);
        });
        menu.append(seccionHTML);
    });
}
// ----- Dibujar Categorias ----- //
function dibujarCategorias() {
    MENU.forEach((seccion) => {
        const enlaceHTML = document.createElement("a");
        enlaceHTML.classList.add("categorias__enlace");
        enlaceHTML.textContent = seccion.titulo;
        enlaceHTML.href = `#${seccion.id}`;
        categorias.append(enlaceHTML);
    });
}
// ----- Vigilante de la sección ----- //
const vigilante = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // ¿Esta seccion esta en pantalla?
        if (entrada.isIntersecting) {
            // ¿cual es? -> "cocteles"
            const id = entrada.target.id;
            const enlaces = document.querySelectorAll(".categorias__enlace");
            enlaces.forEach((enlace) => {
                enlace.classList.remove("categorias__enlace--activo");
            });
            const enlaceActivo = document.querySelector(`.categorias__enlace[href="#${id}"]`);
            enlaceActivo.classList.add("categorias__enlace--activo");
            categorias.scrollTo({
                left: enlaceActivo.offsetLeft -
                    categorias.clientWidth / 2 +
                    enlaceActivo.clientWidth / 2,
                behavior: "smooth",
            });
        }
    });
}, { rootMargin: "-35% 0px -60% 0px" });
// ----- INICIO ----- //
dibujarMenu();
dibujarCategorias();
actualizarContador();
const secciones = document.querySelectorAll("section");
secciones.forEach((seccion) => {
    vigilante.observe(seccion);
});
