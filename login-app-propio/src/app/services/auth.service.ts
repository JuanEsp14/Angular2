import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  //private url = 'https://identitytoolkit.googleapis.com/v1/accounts:sign';
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:sign';
  private apikey = 'AIzaSyDzhmZCDGslsYv_9ikDkR77k6dbrE8DntM';

  userToken:string;
  

  constructor(private http:HttpClient) { 
    this._leerToken();
  }

  logout(){}

  login(usuario:UsuarioModel){
    const authData = {
      email:usuario.email,
      password:usuario.password,
      //Se podría enviar ...usuario y toma automáticamente los valores
      returnSecureToken:true
    }

    return this.http.post(`${this.url}InWithPassword?key=${this.apikey}`, authData)
            .pipe(
              map(resp =>{
                console.log('Entro en el mapa del login')
                this._guardarToken(resp['idToken']);
                return resp;
              })
            );
  }

  nuevoUsuario(usuario:UsuarioModel){
    const authData = {
      email:usuario.email,
      password:usuario.password,
      //Se podría enviar ...usuario y toma automáticamente los valores
      returnSecureToken:true
    }

    return this.http.post(`${this.url}Up?key=${this.apikey}`, authData)
            .pipe(
              map(resp =>{
                console.log('Entro en el mapa del nuevo usuario')
                this._guardarToken(resp['idToken']);
                return resp;
              })
            );
  }

  private _guardarToken(idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  private _leerToken():string{

    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }
}
