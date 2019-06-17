import { Injectable } from '@angular/core';
// Importamos los componentes que vamos a usar
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { Divisa } from '../models/divisa';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }

  getClientes(): Observable<any> {
    return this._http.get('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/cliente/');
  }

  public getValoresDeCambio():Observable<any>{
    return this._http.get("http://www.dolarsi.com/api/api.php?type=valoresprincipales");
  }


  getMonedas(): Observable<any> {
    return this._http.get('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/divisa/');
  }

  borrarMoneda(id: number){
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete(('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/divisa/'+id));
  }

  public sendMoneda(divisa){
    //console.log("Send M" + moneda);

    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(divisa);
    return this._http.post('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/divisa/new', body,
    httpOption);
  }

  modificarMoneda(divisa:Divisa){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let body = JSON.stringify(divisa);
    //envio en el body el moneda transformado en un JSON
    return this._http.post('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/divisa/'+divisa.id+'/edit',
    body, httpOption);
  }

}
