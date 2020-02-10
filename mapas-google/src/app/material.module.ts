import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';


/** Se denem agregar en el export los archivos que queramos utlizar en el app.module */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports:[        
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
