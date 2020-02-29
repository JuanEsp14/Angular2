//Directive sirve  para tener todas las propiedades de una directiva y poder usarla eun HTML
//EventEmitter sirve para comunicarle al padre que sucedió un evento
//ElementRef sirve para tener una relación directa con el HTML
//HostListner sirve para tener CallBaks cuando suceden eventos
//Input - Output sirven para introducir y enviar datos al padre
import { Directive, EventEmitter,  ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  //Dragover realiza una acción si el mouse arrastra algo sobre el elemento
  @HostListener('dragover',['$event'])
  public onDragEnter( event:any ){
    this.mouseSobre.emit( true );
  }

  //Dragleade realiza una acción si el mouse no arrastra nada sobre el elemento
  @HostListener('dragleave',['$event'])
  public onDragLeave( event:any ){
    this.mouseSobre.emit( false );
  }

  //Validaciones
  private _archivoPuedeSerCargado( archivo:File ): boolean{
    if( !this._archivoYaFueDroppeado( archivo.name) && this._esImagen( archivo.type )){
      return true;
    }
    return false;
  }

  private _prevenirDetener( event ){
    //Evitan que al arrojar la imagen en Chrome esta se abra por defecto
    event.preventDefault(); 
    event.stopPropagation(); 
  }

  private _archivoYaFueDroppeado( nombreArchivo:string ):boolean{
    //Verifica si el archivo ya está en el arreglo de imagenes
    for(const archivo of this.archivos){
      if( archivo.nombreArchivo == nombreArchivo){
        console.log('El archivo'+ nombreArchivo+ 'ya está agregado');
        return true;
      }
    }
    return false;
  } 

  private _esImagen( tipoArchivo: string):boolean{
    //Validación del tipo de archivo
    return (tipoArchivo === '' || tipoArchivo === undefined ) ? false : tipoArchivo.startsWith('image');
  }
}
