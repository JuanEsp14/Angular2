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
    const storageRef =  firebase.storage().ref();

    for(const item of imagenes){
      item.estaSubiendo = true;
      if(item.progreso >= 100){
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child
                (`${ this.CARPETA_IMAGENES}/${ item.nombreArchivo}`)
                  .put( item.archivo );
      
      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
         ( snapshot ) => item.progreso = ( snapshot.bytesTransferred/snapshot.totalBytes ) * 100,
         ( error ) => console.error('Error al subir', error),
         ( ) => {
            uploadTask.snapshot.ref.getDownloadURL()
            .then((url) => {
              item.url = url;
              item.estaSubiendo = false;
              this.guardarImagen({
                nombre: item.nombreArchivo,
                url: item.url
            });
          });
           console.log('Imagen cargada correctamente');
         }
      );
        
    }
  }

  private guardarImagen( imagen:{ nombre: string, url:string } ){
    console.log('Se va a guardar la imagen');
    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
      .add( imagen );
  }
}
