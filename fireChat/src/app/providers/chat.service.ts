import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) { 
  
  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats');

    //Con la nueva actualzación de Angular se debe usar el pipe antes de 
    //hacer un map en un observable
    return this.itemsCollection.valueChanges().pipe(
          map((mensajes: Mensaje[]) => {
            this.chats = mensajes;
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
