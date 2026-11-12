import { Pedido } from "./pedido.js";
import { MENU } from "./menu-datos.js";
// ----- VARIABLES ----- //
const pedidoNuevo = new Pedido();
const menu = document.querySelector(".menu");
const categorias = document.querySelector(".categorias__enlaces");
const pedidoFlotante = document.querySelector(".pedido-flotante");
const contador = document.querySelector(".pedido__contador");
const panelPedido = document.querySelector(".panel-pedido");
const panelLista = document.querySelector(".panel-pedido__lista");
const panelTotal = document.querySelector(".panel-pedido__total");
const botonEnviar = document.querySelector(".panel-pedido__enviar");
const botonCerrar = document.querySelector(".panel-pedido__cerrar");
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
    tarjeta.append(nombre);
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
    boton.textContent = "Agregar al pedido";
    boton.addEventListener("click", () => {
        pedidoNuevo.agregarPlato(plato);
        actualizarContador();
    });
    tarjeta.append(precio, boton);
    return tarjeta;
}
function crearFila(plato) {
    const platoFila = document.createElement("li");
    platoFila.classList.add("plato-fila");
    const linea = document.createElement("div");
    linea.classList.add("plato-fila__linea");
    const puntos = document.createElement("span");
    puntos.classList.add("plato-fila__puntitos");
    const nombreFila = document.createElement("h4");
    nombreFila.classList.add("plato-fila__nombre");
    nombreFila.textContent = plato.nombre;
    const precioFila = document.createElement("p");
    precioFila.classList.add("plato-fila__precio");
    precioFila.textContent = formatoPesos.format(plato.precio);
    linea.append(nombreFila, puntos, precioFila);
    platoFila.append(linea);
    if (plato.descripcion) {
        const descripcionFila = document.createElement("p");
        descripcionFila.classList.add("plato-fila__descripcion");
        descripcionFila.textContent = plato.descripcion;
        platoFila.append(descripcionFila);
    }
    const botonFila = document.createElement("button");
    botonFila.classList.add("plato-fila__boton");
    botonFila.textContent = "+";
    botonFila.addEventListener("click", () => {
        pedidoNuevo.agregarPlato(plato);
        actualizarContador();
    });
    platoFila.append(botonFila);
    return platoFila;
}
// ------ Dibujar Menú ----- //
function dibujarMenu() {
    let grupoAnterior = null;
    MENU.forEach((seccion) => {
        const seccionHTML = document.createElement("section");
        seccionHTML.id = seccion.id;
        const tituloHTML = document.createElement("h2");
        tituloHTML.textContent = seccion.titulo;
        seccionHTML.append(tituloHTML);
        if (seccion.grupo !== grupoAnterior) {
            const seccionGrupo = document.createElement("h1");
            seccionGrupo.classList.add("seccion__grupo");
            seccionGrupo.textContent = seccion.grupo;
            menu.append(seccionGrupo);
            grupoAnterior = seccion.grupo;
        }
        if (seccion.estilo === "lista") {
            const listaHTML = document.createElement("ul");
            listaHTML.classList.add("lista");
            seccion.items.forEach((plato) => {
                const fila = crearFila(plato);
                listaHTML.append(fila);
            });
            seccionHTML.append(listaHTML);
        }
        else {
            seccion.items.forEach((plato) => {
                const tarjeta = crearTarjeta(plato);
                seccionHTML.append(tarjeta);
            });
        }
        menu.append(seccionHTML);
    });
}
function mostrarPedido() {
    panelLista.innerHTML = "";
    pedidoNuevo.obtenerItems().forEach((item) => {
        const linea = document.createElement("li");
        linea.textContent = `${item.nombre} x ${item.cantidad} ${formatoPesos.format(item.precio * item.cantidad)}`;
        const botonQuitar = document.createElement("button");
        botonQuitar.textContent = "-";
        botonQuitar.addEventListener("click", () => {
            pedidoNuevo.quitarPlato(item.id);
            mostrarPedido();
            actualizarContador();
        });
        linea.append(botonQuitar);
        panelLista.append(linea);
    });
    panelTotal.textContent = `Total: ${formatoPesos.format(pedidoNuevo.calcularTotal())}`;
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
// ----- EVENTOS ----- //
pedidoFlotante.addEventListener("click", () => {
    mostrarPedido();
    panelPedido.hidden = false;
});
botonCerrar.addEventListener("click", () => {
    panelPedido.hidden = true;
});
// ---------- PEDIDO POR WHATSAPP --------- //
botonEnviar.addEventListener("click", () => {
    // 1. si el pedido está vacío, salte
    if (pedidoNuevo.contarUnidades() === 0) {
        return;
    }
    // 2. convertir cada item en su línea "- nombre x cantidad = subtotal"
    const lineas = pedidoNuevo
        .obtenerItems()
        .map(({ nombre, precio, cantidad }) => {
        const subtotal = precio * cantidad;
        return `- ${nombre} x ${cantidad} = ${formatoPesos.format(subtotal)}`;
    });
    // 3. armar el mensaje completo: saludo + líneas juntas + total
    const mensaje = `¡Hola La Terraza Grill House! Este es mi pedido: \n${lineas.join("\n")}\nTotal: ${formatoPesos.format(pedidoNuevo.calcularTotal())}`;
    // 4. armar el link de WhatsApp con el mensaje seguro
    const link = `https://wa.me/573001234567?text=${encodeURIComponent(mensaje)}`;
    // 5. abrirlo en una pestaña nueva
    window.open(link, "_blank");
});
// ----- INICIO ----- //
dibujarMenu();
dibujarCategorias();
actualizarContador();
const secciones = document.querySelectorAll("section");
secciones.forEach((seccion) => {
    vigilante.observe(seccion);
});
