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
  opcion?: string;
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
      {
        id: 3,
        nombre: "Picada mixta premium",
        precio: 35000,
        descripcion:
          "100 g de pollo, 100 g de lomo de res y chorizo en rodajas, con papas a la francesa y salsas de la casa.",
        opcion: "Elige tu salsa: BBQ o chimichurri",
        foto: "img/platos/picada-mixta.jpg",
      },
      {
        id: 4,
        nombre: "Mazorcada premium",
        precio: 35000,
        descripcion:
          "180 g de pollo, chorizo, papas a la francesa, maíz dulce en salsa de la casa y queso.",
        foto: "img/platos/mazorcada.jpg",
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
        id: 5,
        nombre: "Salchipapa de la casa",
        precio: 30000,
        descripcion:
          "3 salchichas rancheras, 1 chorizo, queso, tocineta, papas a la francesa y salsas de la casa.",
      },
      {
        id: 6,
        nombre: "Choripapa junior",
        precio: 15000,
        descripcion: "Papas a la francesa, chorizo, queso y salsas.",
      },
      {
        id: 7,
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
        id: 8,
        nombre: "Grill House",
        precio: 23000,
        descripcion:
          "150 g de carne de res a la parrilla, queso, mermelada de tocineta con cebolla, vegetales y salsas de la casa.",
        foto: "img/platos/grill-house.jpg",
      },
      {
        id: 9,
        nombre: "Grill House doble",
        precio: 32000,
        descripcion:
          "300 g de carne de res a la parrilla, queso, mermelada de tocineta con cebolla, vegetales y salsas de la casa.",
      },
      {
        id: 10,
        nombre: "Grill Imperial",
        precio: 23000,
        descripcion:
          "150 g de carne a la parrilla, queso, BBQ de cholupa, tocineta crocante, aros de cebolla, lechuga y pepinillos.",
        foto: "img/platos/grill-imperial.jpg",
      },
      {
        id: 11,
        nombre: "Americana",
        precio: 23000,
        descripcion:
          "150 g de carne a la parrilla, queso, BBQ texana, aros de cebolla, huevo frito, tocineta crocante y salsa de la casa.",
        foto: "img/platos/americana.jpg",
      },
      {
        id: 12,
        nombre: "Mexicana",
        precio: 23000,
        descripcion:
          "150 g de carne a la parrilla, queso, salsa de la casa, tocineta crocante, pico de gallo, jalapeños y Doritos.",
      },
      {
        id: 13,
        nombre: "Gaucha",
        precio: 25000,
        descripcion:
          "150 g de carne a la parrilla, queso, salsa de la casa, chorizo, vegetales y chimichurri cremoso.",
      },
      {
        id: 14,
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
        id: 15,
        nombre: "Doble smash",
        precio: 25000,
        descripcion:
          "2 carnes smash de 80 g, queso, mermelada de tocineta, pepinillos y salsa de la casa.",
      },
      {
        id: 16,
        nombre: "Triple smash",
        precio: 32000,
        descripcion:
          "3 carnes smash de 80 g, queso, mermelada de tocineta, pepinillos y salsa de la casa.",
      },
      {
        id: 17,
        nombre: "Oklahoma doble",
        precio: 25000,
        descripcion:
          "2 carnes de 80 g con cebolla a la plancha, queso, pepinillos, tocineta crocante y salsa de la casa.",
        foto: "img/platos/oklahoma-doble.jpg",
      },
      {
        id: 18,
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
        id: 19,
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
      { id: 20, nombre: "Porción de papas a la francesa", precio: 6000 },
      {
        id: 21,
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
        id: 22,
        nombre: "Piña colada",
        precio: 20000,
        descripcion: "Coco, piña, ron y leche condensada.",
      },
      {
        id: 23,
        nombre: "Mojito de fresa",
        precio: 18000,
        descripcion: "Ron blanco, hierbabuena, fresas, azúcar, limón y Sprite.",
      },
      {
        id: 24,
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
        id: 25,
        nombre: "Soda de frutos rojos",
        precio: 13000,
        descripcion: "Cereza, limón, perlas explosivas de cereza y soda.",
      },
      {
        id: 26,
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
      { id: 27, nombre: "Malteada de café", precio: 14000 },
      { id: 28, nombre: "Malteada de Baileys", precio: 14000 },
      { id: 29, nombre: "Malteada de vainilla", precio: 14000 },
    ],
  },
  /* ---------------------- Jugos & Limonadas---------------------- */
  {
    id: "jugos-y-limonadas",
    titulo: "Jugos y limonadas",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      {
        id: 30,
        nombre: "Batido de coco",
        precio: 13000,
        descripcion:
          "Extracto de coco, leche condensada, leche y coco rallado.",
      },
      {
        id: 31,
        nombre: "Limonada de coco",
        precio: 13000,
        descripcion: "Extracto de coco, leche condensada, leche y limón.",
      },
      {
        id: 32,
        nombre: "Limonada cerezada",
        precio: 13000,
        descripcion: "Extracto de cereza, agua, limón y azúcar.",
      },
      {
        id: 33,
        nombre: "Limonada maracumango",
        precio: 13000,
        descripcion: "Extracto de mango y maracuyá, agua, limón y azúcar.",
      },
      {
        id: 34,
        nombre: "Limonada natural",
        precio: 9000,
        descripcion: "Limón, agua, azúcar y hielo.",
      },
    ],
  },
  /* ---------------------- Cervezas ---------------------- */
  {
    id: "cervezas",
    titulo: "Cervezas",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { id: 35, nombre: "Águila", precio: 6000 },
      { id: 36, nombre: "Cola y Pola", precio: 6000 },
      { id: 37, nombre: "Coronita", precio: 8000 },
      { id: 38, nombre: "Club Colombia", precio: 7000 },
    ],
  },
  /* ---------------------- Sin alcohol ---------------------- */
  {
    id: "sin-alcohol",
    titulo: "Sin alcohol",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { id: 39, nombre: "Agua", precio: 4000 },
      { id: 40, nombre: "Coca-Cola 400 ml", precio: 4500 },
      { id: 41, nombre: "Ginger personal", precio: 4500 },
      { id: 42, nombre: "Bretaña personal", precio: 4500 },
      { id: 43, nombre: "Sprite", precio: 4500 },
    ],
  },
];
