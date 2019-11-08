import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:sign';
  private apikey = 'AIzaSyDzhmZCDGslsYv_9ikDkR77k6dbrE8DntM';
  

  constructor(private http:HttpClient) { }

  logout(){}

  login(usuario:UsuarioModel){}

  nuevoUsuario(usuario:UsuarioModel){}
}
