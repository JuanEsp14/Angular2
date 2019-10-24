import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string = "Juan Espinoza";

  nombre2:string = "juAn ManuEl espINoza";

  arreglo:number[] = [1,2,3,4,5,6,7,8,9,0];

  PI = Math.PI;

  a:number = 0.234;

  salario:number = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "Primera",
      numero: "19"
    }
  }

  valorDePromesa = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Llego la data!'), 3500);
  })

  fecha:Date = new Date();

  video:string = "5eJz0kdOrLw"

  activar:boolean = true;
}
