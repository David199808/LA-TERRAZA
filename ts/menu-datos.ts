export type Categoria =
  | "platos-fuertes"
  | "antojos-terraza"
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
  descripcion: string;
  precio: number;
}

export interface Seccion {
  id: Categoria;
  titulo: string;
  grupo: Grupo;
  estilo: Estilo;
  items: Plato[];
}

const MENU: Seccion[] = [
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
  /* ---------------------- BEBIDAS ---------------------- */
  {
    id: "cocteles",
    titulo: "Cócteles",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      {
        id: 3,
        nombre: "Piña colada",
        precio: 20000,
        descripcion: "Coco, piña, ron y leche condensada.",
      },
      {
        id: 4,
        nombre: "Mojito de fresa",
        precio: 18000,
        descripcion: "Ron blanco, hierbabuena, fresas, azúcar, limón y Sprite.",
      },
      {
        id: 5,
        nombre: "Margarita frozen azul",
        precio: 20000,
        descripcion: "Tequila, limón, curazao y azúcar.",
      },
    ],
  },
];
