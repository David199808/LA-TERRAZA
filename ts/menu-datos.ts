export type Categoria =
  | "platos-fuertes"
  | "antojos"
  | "hamburguesas-a-la-parrilla"
  | "hamburguesas-smash"
  | "hamburguesa-de-pollo"
  | "adicionales"
  | "cocteles"
  | "sodas-saborizadas"
  | "malteadas"
  | "jugos-y-limonadas"
  | "cervezas"
  | "sin-alcohol";

export type Grupo = "comida" | "bebidas";
export type Estilo = "tarjetas" | "lista";

export interface Plato {
  readonly id: number;
  foto?: string;
  nombre: string;
  descripcion?: string;
  precio: number;
}

export interface Seccion {
  id: Categoria;
  titulo: string;
  grupo: Grupo;
  estilo: Estilo;
  nota?: string;
  items: Plato[];
}

export const MENU: Seccion[] = [
  /* ---------------------- PLATOS FUERTES ---------------------- */
  {
    id: "platos-fuertes",
    titulo: "Platos fuertes",
    grupo: "comida",
    estilo: "tarjetas",
    items: [
      {
        id: 1,
        nombre: "Brocheta mixta",
        precio: 30000,
        descripcion:
          "Pollo, lomo fino de res y chorizo, con papas a la francesa, ensalada y salsas de la casa.",
      },
      {
        id: 2,
        nombre: "Brocheta de camarones",
        precio: 40000,
        descripcion:
          "Camarones en salsa de la casa, con papas a la francesa, ensalada y salsas de la casa.",
        foto: "img/platos/brocheta-camarones.jpg",
      },
    ],
  },
  /* ---------------------- ANTOJOS ---------------------- */
  {
    id: "antojos",
    titulo: "Antojos Terraza",
    grupo: "comida",
    estilo: "tarjetas",
    items: [
      {
        id: 3,
        nombre: "Salchipapa de la casa",
        precio: 30000,
        descripcion:
          "3 salchichas rancheras, 1 chorizo, queso, tocineta, papas a la francesa y salsas de la casa.",
      },
      {
        id: 4,
        nombre: "Choripapa junior",
        precio: 15000,
        descripcion: "Papas a la francesa, chorizo, queso y salsas.",
      },
      {
        id: 5,
        nombre: "Salchi junior",
        precio: 15000,
        descripcion: "Papas a la francesa, salchicha ranchera, queso y salsas.",
      },
    ],
  },
  /* ---------------------- HAMBURGUESAS A LA PARRILLA ---------------------- */
  {
    id: "hamburguesas-a-la-parrilla",
    titulo: "Hamburguesas a la parrilla",
    grupo: "comida",
    estilo: "tarjetas",
    nota: "Cámbiala de pan a patacón por solo $2.000 más",
    items: [
      {
        id: 6,
        nombre: "Grill House",
        precio: 23000,
        descripcion:
          "150 g de carne de res a la parrilla, queso, mermelada de tocineta con cebolla, vegetales y salsas de la casa.",
        foto: "img/platos/grill-house.jpg",
      },
      {
        id: 7,
        nombre: "Grill House doble",
        precio: 32000,
        descripcion:
          "300 g de carne de res a la parrilla, queso, mermelada de tocineta con cebolla, vegetales y salsas de la casa.",
      },
      {
        id: 8,
        nombre: "Grill Imperial",
        precio: 23000,
        descripcion:
          "150 g de carne a la parrilla, queso, BBQ de cholupa, tocineta crocante, aros de cebolla, lechuga y pepinillos.",
        foto: "img/platos/grill-imperial.jpg",
      },
      {
        id: 9,
        nombre: "Americana",
        precio: 23000,
        descripcion:
          "150 g de carne a la parrilla, queso, BBQ texana, aros de cebolla, huevo frito, tocineta crocante y salsa de la casa.",
        foto: "img/platos/americana.jpg",
      },
      {
        id: 10,
        nombre: "Mexicana",
        precio: 23000,
        descripcion:
          "150 g de carne a la parrilla, queso, salsa de la casa, tocineta crocante, pico de gallo, jalapeños y Doritos.",
      },
      {
        id: 11,
        nombre: "Gaucha",
        precio: 25000,
        descripcion:
          "150 g de carne a la parrilla, queso, salsa de la casa, chorizo, vegetales y chimichurri cremoso.",
      },
      {
        id: 12,
        nombre: "Queso apanado",
        precio: 25000,
        descripcion:
          "150 g de carne a la parrilla, queso apanado en panko, tocineta crocante, BBQ de cholupa y salsa de la casa.",
      },
    ],
  },
  /* ---------------------- HAMBURGUESAS SMASH ---------------------- */
  {
    id: "hamburguesas-smash",
    titulo: "Hamburguesas smash",
    grupo: "comida",
    estilo: "tarjetas",
    items: [
      {
        id: 13,
        nombre: "Doble smash",
        precio: 25000,
        descripcion:
          "2 carnes smash de 80 g, queso, mermelada de tocineta, pepinillos y salsa de la casa.",
      },
      {
        id: 14,
        nombre: "Triple smash",
        precio: 32000,
        descripcion:
          "3 carnes smash de 80 g, queso, mermelada de tocineta, pepinillos y salsa de la casa.",
      },
      {
        id: 15,
        nombre: "Oklahoma doble",
        precio: 25000,
        descripcion:
          "2 carnes de 80 g con cebolla a la plancha, queso, pepinillos, tocineta crocante y salsa de la casa.",
        foto: "img/platos/oklahoma-doble.jpg",
      },
      {
        id: 16,
        nombre: "Oklahoma triple",
        precio: 32000,
        descripcion:
          "3 carnes de 80 g con cebolla a la plancha, queso, pepinillos, tocineta crocante y salsa de la casa.",
        foto: "img/platos/oklahoma-triple.jpg",
      },
    ],
  },
  /* ---------------------- HAMBURGUESAS DE POLLO ---------------------- */
  {
    id: "hamburguesa-de-pollo",
    titulo: "Hamburguesa de pollo",
    grupo: "comida",
    estilo: "tarjetas",
    items: [
      {
        id: 17,
        nombre: "Pollo apanado BBQ",
        precio: 25000,
        descripcion:
          "150 g de pollo apanado en panko, pepinillos, tocineta crocante, salsa de la casa y BBQ de cholupa.",
        foto: "img/platos/pollo-apanado.jpg",
      },
    ],
  },
  /* ---------------------- ADICIONALES ---------------------- */
  {
    id: "adicionales",
    titulo: "Adicionales",
    grupo: "comida",
    estilo: "lista",
    items: [
      { id: 18, nombre: "Porción de papas a la francesa", precio: 6000 },
      {
        id: 19,
        nombre: "Michelada",
        precio: 2000,
        descripcion: "Para acompañar tu cerveza.",
      },
    ],
  },
  /* ---------------------- BEBIDAS ---------------------- */

  /* ---------------------- Cócteles ---------------------- */
  {
    id: "cocteles",
    titulo: "Cócteles",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      {
        id: 20,
        nombre: "Piña colada",
        precio: 20000,
        descripcion: "Coco, piña, ron y leche condensada.",
      },
      {
        id: 21,
        nombre: "Mojito de fresa",
        precio: 18000,
        descripcion: "Ron blanco, hierbabuena, fresas, azúcar, limón y Sprite.",
      },
      {
        id: 22,
        nombre: "Margarita frozen azul",
        precio: 20000,
        descripcion: "Tequila, limón, curazao y azúcar.",
      },
    ],
  },
  /* ---------------------- Sodas saborizadas ---------------------- */
  {
    id: "sodas-saborizadas",
    titulo: "Sodas saborizadas",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      {
        id: 23,
        nombre: "Soda de frutos rojos",
        precio: 13000,
        descripcion: "Cereza, limón, perlas explosivas de cereza y soda.",
      },
      {
        id: 24,
        nombre: "Soda laguna azul",
        precio: 13000,
        descripcion: "Blueberry, limón, perlas explosivas de blueberry y soda.",
      },
    ],
  },
  /* ---------------------- Malteadas ---------------------- */
  {
    id: "malteadas",
    titulo: "Malteadas",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { id: 25, nombre: "Malteada de café", precio: 14000 },
      { id: 26, nombre: "Malteada de Baileys", precio: 14000 },
      { id: 27, nombre: "Malteada de vainilla", precio: 14000 },
    ],
  },
];

export function guardarProductos(lista: Seccion[]) {
  localStorage.setItem("menu", JSON.stringify(lista));
}

export function obtenerProducto(): Seccion[] {
  const guardado = localStorage.getItem("menu");
  if (guardado) {
    const guardados: Seccion[] = JSON.parse(guardado);
    return guardados;
  } else {
    guardarProductos(MENU);
    return MENU;
  }
}
