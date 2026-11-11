export class Pedido {
    constructor() {
        this.items = [];
        const guardado = localStorage.getItem("pedido");
        if (guardado) {
            this.items = JSON.parse(guardado);
        }
    }
    obtenerItems() {
        return this.items;
    }
    guardar() {
        localStorage.setItem("pedido", JSON.stringify(this.items));
    }
    contarUnidades() {
        return this.items.reduce((unidades, plato) => unidades + plato.cantidad, 0);
    }
    agregarPlato(plato) {
        const enPedido = this.items.find((item) => item.id === plato.id);
        if (enPedido) {
            enPedido.cantidad += 1;
        }
        else {
            this.items.push({ ...plato, cantidad: 1 });
        }
        this.guardar();
    }
    calcularTotal() {
        return this.items.reduce((total, plato) => total + plato.precio * plato.cantidad, 0);
    }
    quitarPlato(id) {
        const posicion = this.items.findIndex((plato) => plato.id === id);
        if (posicion === -1) {
            return;
        }
        const item = this.items[posicion];
        if (item.cantidad > 1) {
            item.cantidad -= 1;
        }
        else {
            this.items.splice(posicion, 1);
        }
        this.guardar();
    }
}
