import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MapaComponent } from './mapa.component';
import { Marcador } from '../../clases/marcador.class';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styles: []
})
export class MapaEditarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MapaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
