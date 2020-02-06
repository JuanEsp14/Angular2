import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public _ps:PeliculasService) { 
    this._ps.getCartelera()
        .subscribe(res =>{
          this.cartelera = res;
        });
    this._ps.getPopulares()
        .subscribe(res =>{
          this.populares = res;
        });
    this._ps.getPopularesNinos()
        .subscribe(res =>{
          this.popularesNinos = res;
        });
  }

  ngOnInit() {
  }

}
