import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  login( form:NgForm ){
    if(form.invalid) return;
    
    Swal.fire({
      //Persona no puede salir haciendo click afuera
      allowOutsideClick:false,
      text: 'Espere por favor...',
      icon:'info',
    });

    Swal.showLoading();

    this.auth.login(this.usuario)
      .subscribe(resp =>{
        console.log(resp);
        Swal.close();
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error al iniciar sesión',
          text: err.error.error.message,
          icon:'error',
        });
      });
  }

}
