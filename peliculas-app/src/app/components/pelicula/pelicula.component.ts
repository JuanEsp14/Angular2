import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;

  constructor(public _ps:PeliculasService, public router:ActivatedRoute) { 
    this.router.params.subscribe(parametros =>{
      this._ps.getPelicula(parametros['id'])
        .subscribe(pelicula => this.pelicula = pelicula)
    });
  }

  ngOnInit() {
  }

}
