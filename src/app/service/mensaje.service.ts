import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Mensaje } from './../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private _http: HttpClient) { }

  getEmpresas(): Observable<any> {
    return this._http.get('http://localhost:8080/mensajeProyect/public/index.php/empresa/');
  }


  getMensajes(): Observable<any> {
    return this._http.get('http://localhost:8080/mensajeProyect/public/index.php/mensaje/');
  }

  public getMensajes2(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:8080/mensajeProyect/public/index.php/mensaje/",
      httpOption);
  }

  borrarMensaje(id: number){
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete(('http://localhost:8080/mensajeProyect/public/index.php/mensaje/'+id));
  }

  public sendMensaje(mensaje){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(mensaje);
    return this._http.post('http://localhost:8080/mensajeProyect/public/index.php/mensaje/new', body,
    httpOption);
  }

  modificarMensaje(mensaje:Mensaje){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let body = JSON.stringify(mensaje);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post('http://localhost:8080/mensajeProyect/public/index.php/mensaje/'+mensaje.id+'/edit',
    body, httpOption);
  }

}
