import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MapaComponent } from './mapa.component';  
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styles: []
})
export class MapaEditarComponent implements OnInit {

  forma:FormGroup;

  constructor(public dialogRef: MatDialogRef<MapaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fb:FormBuilder) { 
      console.log(data);
      this.forma = fb.group({
        'titulo': data.titulo,
        'descripcion': data.descripcion
      })
    }

  ngOnInit() {
  }

  guardarCambios(){
    this.dialogRef.close(this.forma.value);
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
