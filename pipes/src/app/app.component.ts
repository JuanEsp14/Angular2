import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string = "Juan Espinoza";

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
}
