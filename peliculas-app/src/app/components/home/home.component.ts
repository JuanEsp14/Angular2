import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;

  constructor(public _ps:PeliculasService) { 
    this._ps.getCartelera()
        .subscribe(res =>{
          console.log(this.cartelera);
          this.cartelera = res;
          console.log(this.cartelera);
        });
  }

  ngOnInit() {
  }

}
