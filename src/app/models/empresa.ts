export class Empresa {
  id:number;
  nombre: string;
  razonSocial: string;
  urlWebsite: string;
  Empresa(id?:number, nombre?:string, razon?:string, url?:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.razonSocial = razon;
        this.urlWebsite = url;
    }
}
