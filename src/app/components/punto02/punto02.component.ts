import { Component, OnInit } from '@angular/core';

import { MonedaService } from './../../services/moneda.service';
import { Moneda } from './../../models/moneda';

import { NgForm } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-punto02',
  templateUrl: './punto02.component.html',
  styleUrls: ['./punto02.component.css']
})
export class Punto02Component implements OnInit {
  moneda: Moneda;
  monedas: Array<Moneda>;

  // private _http: HttpClient
  valorVenta: number = null;
  valorCompra: number = null;
  montoMostrar: number = null;

  constructor(private monedaService: MonedaService) {
    this.moneda = new Moneda();
    this.monedas = new Array<Moneda>();
    this.cargarValoreDeCambio();
    this.mostrarHistoricos();
  }

  ngOnInit() {
  }

  cargarValoreDeCambio() {

    this.monedaService.getValoresDeCambio().subscribe(
      (result) => {
        this.moneda = new Moneda();
        //console.log(result);
        //this.monedas = JSON.parse(result['casa']);

        //Object.assign(this.moneda, result[0].casa);
        this.valorCompra = parseFloat(result[0].casa.compra.replace(',', '.'));
        this.valorVenta = parseFloat(result[0].casa.venta.replace(',', '.'));
        //console.log(parseFloat("43,5".replace(',','.')));

        console.log(this.valorVenta+" / " + this.valorCompra);
      },
      error => {
        alert("Error en la petición");
      }
    )
  }

  public convertirMoneda(formValor: NgForm) {
    if (formValor.valid == true) {
      //this.moneda = new Moneda();
      this.cargarValoreDeCambio();
      this.moneda.compra = this.valorCompra;
      this.moneda.venta = this.valorVenta;
      if (this.moneda.tipoCambio != "ARS/USD") {
        this.moneda.montoEntregado = this.moneda.montoRecibido * this.valorCompra;
      } else {
        this.moneda.montoEntregado = this.moneda.montoRecibido / this.valorVenta;
      }
      this.montoMostrar = this.moneda.montoEntregado;
      //this.monedas.push(this.moneda);
      //console.log("antes de Ev"  + this.moneda);
      this.enviarMoneda();

    }
  }

  public mostrarHistoricos() {
    //llamamos al metodo del service
    //para cargar los mensajes
    this.monedaService.getMonedas()
      .subscribe(
        result => {
          this.monedas = result;
          //console.log(this.monedas);
        },
        error => {
          alert("error en la peticion");
        });
  }

  public enviarMoneda() {
    this.moneda.fecha = new Date();
    console.log(this.moneda);
    this.monedaService.sendMoneda(this.moneda)
      .subscribe(
        result => {
          console.log("agregado correctamente.");
        },
        error => {
          alert("Error en el envio.");
          console.log(this.moneda);
        });
    this.mostrarHistoricos();
    this.moneda = new Moneda();
  }

}
