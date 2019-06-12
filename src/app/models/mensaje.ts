import { Empresa } from './empresa';

export class Mensaje {
  id: number;
  para: number;
  desde: number;
  texto: string;
  fecha: Date;
  empresa: Empresa;

  constructor(id?: number, para?: number, desde?: number, texto?: string, fecha?: Date, empresa?: Empresa) {
    this.id = id;
    this.para = para;
    this.desde = desde;
    this.texto = texto;
    this.fecha = fecha;
    this.empresa = empresa;
  }
}
