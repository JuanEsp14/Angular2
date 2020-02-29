import { Injectable } from '@angular/core';


//No instalar FIREBASE con el ng add sino hacerlo con NPM. 
//Porque se rompe la app
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';


  constructor(private db:AngularFirestore) { }

  cargarImagenesFirebase( imagenes: FileItem[] ){
    console.log( imagenes );
  }

  private guardarImagen( imagen:{ nombre: string, url:string } ){
    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
      .add( imagen );
  }
}
