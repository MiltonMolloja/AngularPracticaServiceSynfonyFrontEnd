import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto01Component } from './components/punto01/punto01.component';
import { Punto02Component } from './components/punto02/punto02.component';
import { Punto03Component } from './components/punto03/punto03.component';

//  Links Documentation
//  https://www.npmjs.com/package/angular-6-datatable?fbclid=IwAR01RcUK_phn72gxaaSxTBDnIJLXNG0pp98eE4nU5EhdjrlqAL4-7QG3TG0
import {DataTableModule} from "angular-6-datatable";

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import * as $ from 'jquery';
// Validaciones Directiva
import { Invalida, Negativo, SinEspacios } from "./validaciones.directive";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Punto01Component,
    Punto02Component,
    Punto03Component,
    Invalida,
    Negativo,
    SinEspacios
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
