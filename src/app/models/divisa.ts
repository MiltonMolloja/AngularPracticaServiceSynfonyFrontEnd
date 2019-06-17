import { Cliente } from './cliente';

export class Divisa {
  id : number;
  compra: number;
  venta: number;
  montoRecibido: number;
  montoEntregado: number;
  tipoCambio: string;
  fecha: Date;
  cliente: Cliente;

  Divisa(id ?: number,compra?: number, venta?: number, montoRecibido?: number,
     montoEntregado?: number,tipoCambio ?: string, fecha ?: Date, cliente ?: Cliente) {
    this.id = id;
    this.compra = compra;
    this.venta = venta;
    this.montoRecibido = montoRecibido;
    this.montoEntregado = montoEntregado;
    this.tipoCambio = tipoCambio;
    this.fecha = new Date();
    this.cliente = cliente;
  }
}
