import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      
    
      <app-ng-style></app-ng-style>
    
      <app-css></app-css>
    
      <p>
          Hola mundo desde app.component
      </p>
    
      <br>
      <app-clases></app-clases>
      <br><br>
    
      <p [appResaltado]="'orange'">
          Hola Mundo
      </p>
    
      <p [appResaltado]>
          Hola Mundo 2
      </p>  
      <br><br>
      <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
