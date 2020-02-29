//Directive sirve  para tener todas las propiedades de una directiva y poder usarla eun HTML
//EventEmitter sirve para comunicarle al padre que sucedió un evento
//ElementRef sirve para tener una relación directa con el HTML
//HostListner sirve para tener CallBaks cuando suceden eventos
//Input - Output sirven para introducir y enviar datos al padre
import { Directive, EventEmitter,  ElementRef, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

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
}
