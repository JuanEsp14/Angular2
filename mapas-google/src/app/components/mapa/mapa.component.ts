import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: []
})
export class MapaComponent implements OnInit {

  lat:number = 51.678418;
  lng:number = 7.809007;
  marcadores: Marcador[] = [];

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { 
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento){
    const nuevoMarcador = new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(i:number){
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }

  editarMarcador(marcador:Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(!result){
        return;
      }
      marcador.titulo = result.titulo;
      marcador.descripcion = result.descripcion;
      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', {duration: 3000});
    });
    
  }  

}
