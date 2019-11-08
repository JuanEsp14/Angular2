import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel;
  recordarme = false;


  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onSubmit(form:NgForm){
    if(form.invalid) return;

    Swal.fire({
      //Persona no puede salir haciendo click afuera
      allowOutsideClick:false,
      text: 'Espere por favor...',
      icon:'info',
    });
  
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario)
      .subscribe(resp =>{
        console.log(resp);
        Swal.close();
        if(this.recordarme){
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error al crear el usuario',
          text: err.error.error.message,
          icon:'error',
        });
      });
  }

}