import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel;


  constructor() { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onsubmit(form:NgForm){
    if(form.invalid) return;
  }

}
