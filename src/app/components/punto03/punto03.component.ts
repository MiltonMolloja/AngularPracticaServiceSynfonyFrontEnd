import { Component, OnInit } from '@angular/core';

import { DivisaService } from './../../services/divisa.service';
import { Divisa } from './../../models/divisa';

import { NgForm } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-punto03',
  templateUrl: './punto03.component.html',
  styleUrls: ['./punto03.component.css']
})
export class Punto03Component implements OnInit {

  divisa: Divisa;
  divisas: Array<Divisa>;
  cliente: Cliente;
  clientes: Array<Cliente>;

  // private _http: HttpClient
  valorVenta: number = null;
  valorCompra: number = null;
  montoMostrar: number = null;

  constructor(private divisaService: DivisaService)  {
    this.divisa = new Divisa();
    this.cliente = new Cliente();
    this.divisas = new Array<Divisa>();
    this.clientes = new Array<Cliente>();
    this.obtenerCliente();
    this.cargarValoreDeCambio();
    this.mostrarHistoricos();
  }

  ngOnInit() {
  }

  public obtenerCliente() {
    this.divisaService.getClientes().subscribe(
      results => {
        this.clientes = new Array<Cliente>();
        //console.log(results);
        results.forEach(element => {
        //console.log(element);
        this.cliente = element;
        this.clientes.push(this.cliente);
        //console.log(this.clientes);
        });
      }
    );
  }


  cargarValoreDeCambio() {

    this.divisaService.getValoresDeCambio().subscribe(
      (result) => {
        this.divisa = new Divisa();
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
      this.divisa.compra = this.valorCompra;
      this.divisa.venta = this.valorVenta;
      if (this.divisa.tipoCambio != "ARS/USD") {
        this.divisa.montoEntregado = this.divisa.montoRecibido * this.valorCompra;
      } else {
        this.divisa.montoEntregado = this.divisa.montoRecibido / this.valorVenta;
      }
      this.montoMostrar = this.divisa.montoEntregado;
      //this.monedas.push(this.moneda);
      //console.log("antes de Ev"  + this.moneda);
      this.enviarMoneda();
      this.mostrarHistoricos();
    }
  }

  public mostrarHistoricos() {
    //llamamos al metodo del service
    //para cargar los mensajes
    this.divisaService.getMonedas()
      .subscribe(
        result => {
          this.divisas = result;
          //console.log(this.monedas);
        },
        error => {
          alert("error en la peticion");
        });
  }

  public elegirMoneda(divisa: Divisa) {
    //Creo una copia del mensaje recibido como parametro para NO modificarlo
    //ya que el parametro esta mostrandose por el binding en el datatable
    this.divisa = Object.assign(this.divisa, divisa);
    console.log(this.divisa);
  }

  public enviarMoneda() {
    this.divisa.fecha = new Date();

    console.log(this.divisa);
    this.divisaService.sendMoneda(this.divisa)
      .subscribe(
        result => {
          console.log("agregado correctamente.");
        },
        error => {
          alert("Error en el envio.");
          console.log(this.divisa);
        });

    this.divisa = new Divisa();
    this.mostrarHistoricos();
  }


  public borrarMoneda(id: number) {
    this.divisaService.borrarMoneda(id).subscribe(
      result => {
        console.log("borrado correctamente.")
        //actualizo la tabla de mensajes
        this.mostrarHistoricos();
        return true;
      },
      error => {
        console.error("Error deleting!");
        console.log(error);
        return false;
      }
    )
    this.mostrarHistoricos();
    this.divisa = new Divisa();
  }
}
