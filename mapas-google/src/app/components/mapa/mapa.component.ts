import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: []
})
export class MapaComponent implements OnInit {

  lat:number = 51.678418;
  lng:number = 7.809007;
  marcadores: Marcador[] = [];

  constructor() { 
    const nuevoMarcador = new Marcador(this.lat, this.lng);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {
  }

  agregarMarcador(evento){
    const nuevoMarcador = new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
  }

}
