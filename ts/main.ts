import { Pedido } from "./pedido.js";
import { MENU, Plato, Grupo } from "./menu-datos.js";

// ----- VARIABLES ----- //
const pedidoNuevo = new Pedido();

const menu = document.querySelector<HTMLElement>(".menu")!;
const categorias = document.querySelector<HTMLElement>(".categorias__enlaces")!;
const pedidoFlotante = document.querySelector<HTMLElement>(".pedido-flotante")!;
const contador = document.querySelector<HTMLElement>(".pedido__contador")!;
const panelPedido = document.querySelector<HTMLElement>(".panel-pedido")!;
const panelLista = document.querySelector<HTMLElement>(".panel-pedido__lista")!;
const panelTotal = document.querySelector<HTMLElement>(".panel-pedido__total")!;
const botonEnviar = document.querySelector<HTMLElement>(
  ".panel-pedido__enviar",
)!;
const botonCerrar = document.querySelector<HTMLElement>(
  ".panel-pedido__cerrar",
)!;

const panelFondo = document.querySelector<HTMLElement>(".panel-fondo")!;

const buscador = document.querySelector<HTMLInputElement>(".buscador__input")!;

const sinResultados = document.querySelector<HTMLElement>(".sin-resultados")!;

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

function crearTarjeta(plato: Plato) {
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

  if (plato.opcion) {
    const opcion = document.createElement("p");
    opcion.classList.add("plato__opcion");
    opcion.textContent = plato.opcion;
    tarjeta.append(opcion);
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
    boton.textContent = "✓ Agregado";
    boton.classList.add("plato__boton--agregado");
    setTimeout(() => {
      boton.textContent = "Agregar al pedido";
      boton.classList.remove("plato__boton--agregado");
    }, 1000);
  });

  tarjeta.append(precio, boton);
  return tarjeta;
}

function crearFila(plato: Plato) {
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
    botonFila.textContent = "✓";
    botonFila.classList.add("plato__fila-boton--agregado");
    setTimeout(() => {
      botonFila.textContent = "+";
      botonFila.classList.remove("plato__fila-boton--agregado");
    }, 1000);
  });
  platoFila.append(botonFila);
  return platoFila;
}

// ------ Dibujar Menú ----- //

function dibujarMenu() {
  let grupoAnterior: Grupo | null = null;
  MENU.forEach((seccion) => {
    const seccionHTML = document.createElement("section");
    seccionHTML.id = seccion.id;
    const tituloHTML = document.createElement("h2");
    tituloHTML.textContent = seccion.titulo;
    seccionHTML.append(tituloHTML);

    if (seccion.nota) {
      const notaHTML = document.createElement("p");
      notaHTML.classList.add("seccion__nota");
      notaHTML.textContent = seccion.nota;
      seccionHTML.append(notaHTML);
    }

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
    } else {
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

// ---------- Cerrar Panel ---------- //
function cerrarPanel() {
  panelPedido.hidden = true;
  panelFondo.hidden = true;
}

// ----- Vigilante de la sección ----- //

const vigilante = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      // ¿Esta seccion esta en pantalla?
      if (entrada.isIntersecting) {
        // ¿cual es? -> "cocteles"
        const id = entrada.target.id;
        const enlaces = document.querySelectorAll(".categorias__enlace");
        enlaces.forEach((enlace) => {
          enlace.classList.remove("categorias__enlace--activo");
        });
        const enlaceActivo = document.querySelector<HTMLElement>(
          `.categorias__enlace[href="#${id}"]`,
        )!;
        enlaceActivo.classList.add("categorias__enlace--activo");
        categorias.scrollTo({
          left:
            enlaceActivo.offsetLeft -
            categorias.clientWidth / 2 +
            enlaceActivo.clientWidth / 2,
          behavior: "smooth",
        });
      }
    });
  },
  { rootMargin: "-35% 0px -60% 0px" },
);

// ----- EVENTOS ----- //

pedidoFlotante.addEventListener("click", () => {
  mostrarPedido();
  panelPedido.hidden = false;
  panelFondo.hidden = false; // también se muestra el fondo
});

botonCerrar.addEventListener("click", () => {
  panelPedido.hidden = true;
});

botonCerrar.addEventListener("click", cerrarPanel); // la ✕ cierra
panelFondo.addEventListener("click", cerrarPanel); // tocar afuera también cierra

//---------- BUSCADOR ---------- //

buscador.addEventListener("input", () => {
  // 1. leer lo que escribió el cliente, en minúsculas
  const texto = buscador.value.toLowerCase();
  let total = 0;
  // 2. por cada sección de la página...
  document.querySelectorAll<HTMLElement>("section").forEach((seccion) => {
    // 3. contar cuántos platos quedan visibles → empieza en 0
    let visibles = 0;
    // 4. por cada plato de ESTA sección (tarjetas y filas)...
    seccion
      .querySelectorAll<HTMLElement>(".plato, .plato-fila")
      .forEach((plato) => {
        // 5. ¿su nombre contiene lo que se escribió?
        const nombre = plato
          .querySelector(".plato__titulo, .plato-fila__nombre")!
          .textContent!.toLowerCase();
        const coincide = nombre.includes(texto);
        // 6. si sí: mostrarlo y contarlo; si no: esconderlo
        plato.hidden = !coincide;
        if (coincide) visibles++;
      });
    // 7. si no quedó ninguno, esconder la sección completa
    seccion.hidden = visibles === 0;
    total += visibles; // cada mesero le entrega su cuenta
  });
  sinResultados.hidden = total > 0; // ¿hubo resultados? entonces escóndelo
  document
    .querySelectorAll<HTMLElement>(".seccion__grupo")
    .forEach((titulo) => {
      titulo.hidden = texto !== "";
    });
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
  const link = `https://wa.me/573132025273?text=${encodeURIComponent(mensaje)}`;
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
