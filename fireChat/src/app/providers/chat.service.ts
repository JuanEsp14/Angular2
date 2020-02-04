import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario:any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe( user => {
      console.log('Estado del usuario: ', user);
      if(!user){
        return ;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  //Después del auth puedo seleccionar la forma de autenticación como facebook o twitter
  login(proveedor:string) {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats',
         ref => ref.orderBy('fecha', 'desc')
                   .limit(3));

    //Con la nueva actualzación de Angular se debe usar el pipe antes de 
    //hacer un map en un observable
    return this.itemsCollection.valueChanges().pipe(
          map((mensajes: Mensaje[]) => {
            this.chats = [];
            for(let mensaje of mensajes){
              this.chats.unshift(mensaje);
            }
            return this.chats;
         }));
            ;
  }

  agregarMensaje(texto: string){
    let mensaje: Mensaje = {
      nombre: 'Juan Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }
    return this.itemsCollection.add(mensaje);
  }
}
