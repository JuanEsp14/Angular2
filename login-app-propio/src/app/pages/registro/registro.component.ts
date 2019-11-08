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

    this.usuario.email = 'juan.espinoza@fluxit.com.ar';
    this.usuario.name = 'Juan Espinoza';
    this.usuario.password = 'Una contraseña';
  }

  onsubmit(form:NgForm){
    if(form.invalid) return;
  }

}
