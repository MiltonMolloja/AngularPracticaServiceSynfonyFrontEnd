import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { Moneda } from '../models/moneda';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  constructor(private _http: HttpClient) { }

  public getValoresDeCambio():Observable<any>{
    return this._http.get("http://www.dolarsi.com/api/api.php?type=valoresprincipales");
  }


  getMonedas(): Observable<any> {
    return this._http.get('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/moneda/');
  }

  borrarMoneda(id: number){
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete(('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/moneda/'+id));
  }

  public sendMoneda(moneda){
    //console.log("Send M" + moneda);

    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(moneda);
    return this._http.post('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/moneda/new', body,
    httpOption);
  }

  modificarMoneda(moneda:Moneda){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let body = JSON.stringify(moneda);
    //envio en el body el moneda transformado en un JSON
    return this._http.post('http://localhost:8080/AngularPracticaServiceSynfony/public/index.php/moneda/'+moneda.id+'/edit',
    body, httpOption);
  }

}
