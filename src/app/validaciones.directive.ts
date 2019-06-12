import { Directive } from '@angular/core';

import { AbstractControl, NG_VALIDATORS } from '@angular/forms' ;



//Usada para el punto 1
export function verificarNota(c:AbstractControl)
{
    if ( c.value == null ) return null;
    if ( c.value < 0 || c.value > 10  )
    {
        return {invalida: true}
    }
    return null;
}

@Directive(
    {
        selector: '[invalida]',
        providers:
        [
            { provide:NG_VALIDATORS, multi:true, useValue: verificarNota }
        ]
    }
)

export class Invalida { }

//Validaccion para el punto 2

export function verificarMontoValido( c:AbstractControl )
{
    if ( c.value == null ) return null;
    if ( c.value <= 0  )
    {
        return {negativo: true}
    }
    return null;
}

@Directive
(
    {
        selector: '[negativo]',
        providers:
        [
            { provide:NG_VALIDATORS, multi:true, useValue: verificarMontoValido }
        ]
    }
)

export class Negativo { }

//Validaciones para el punto 4
export function verificarEspacios( c:AbstractControl )
{
    if ( c.value == null ) return null;
    if ( c.value.indexOf(' ') >= 0 )
    {
        return {sinEspacios: true}
    }
    return null;
}

@Directive
(
    {
        selector: '[sin-espacios]',
        providers:
        [
            { provide:NG_VALIDATORS, multi:true, useValue: verificarEspacios }
        ]
    }
)

export class SinEspacios { }
