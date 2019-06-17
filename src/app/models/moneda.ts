export class Moneda {
  id : number;
  compra: number;
  venta: number;
  montoRecibido: number;
  montoEntregado: number;
  tipoCambio: string;
  fecha: Date;

  Moneda(id ?: number,compra?: number, venta?: number, montoRecibido?: number, montoEntregado?: number,tipoCambio ?: string, fecha ?: Date) {
    this.id = id;
    this.compra = compra;
    this.venta = venta;
    this.montoRecibido = montoRecibido;
    this.montoEntregado = montoEntregado;
    this.tipoCambio = tipoCambio;
    this.fecha = new Date();
  }
}
