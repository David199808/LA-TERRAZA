import { MENU, Plato } from "./menu-datos.js";

interface ItemPedido extends Plato {
  cantidad: number;
}

export class Pedido {
  private items: ItemPedido[];
  constructor() {
    this.items = [];
    const guardado = localStorage.getItem("pedido");
    if (guardado) {
      this.items = JSON.parse(guardado);
    }
  }

  obtenerItems(): ItemPedido[] {
    return this.items;
  }

  guardar() {
    localStorage.setItem("pedido", JSON.stringify(this.items));
  }

  contarUnidades(): number {
    return this.items.reduce((unidades, plato) => unidades + plato.cantidad, 0);
  }

  agregarPlato(plato: Plato) {
    const enPedido = this.items.find((item) => item.id === plato.id);
    if (enPedido) {
      enPedido.cantidad += 1;
    } else {
      this.items.push({ ...plato, cantidad: 1 });
    }
    this.guardar();
  }

  calcularTotal(): number {
    return this.items.reduce(
      (total, plato) => total + plato.precio * plato.cantidad,
      0,
    );
  }

  quitarPlato(id: number) {
    const posicion = this.items.findIndex((plato) => plato.id === id);
    if (posicion === -1) {
      return;
    }
    const item = this.items[posicion];
    if (item.cantidad > 1) {
      item.cantidad -= 1;
    } else {
      this.items.splice(posicion, 1);
    }
    this.guardar();
  }
}
