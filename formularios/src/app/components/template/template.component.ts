import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: ""
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ARG",
    nombre: "Argentina"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("ngForm ",forma);
    console.log("valor", forma.value);

    console.log("usuario", this.usuario);
  }

}
