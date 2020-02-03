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
