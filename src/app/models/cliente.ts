export class Cliente {
  id : number;
  dni : number;
  apellido : string;
  nombres : string;
  categoria : string;

  Cliente(id : number,    dni : number,    apellido : string,    nombres : string,    categoria : string)
  {
    this.id = id;
    this.dni = dni;
    this.apellido = apellido;
    this.nombres = nombres;
    this.categoria = categoria;
  }


}
