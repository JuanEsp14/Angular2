import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private _heroesService:HeroesService, private _activateRoute:ActivatedRoute) {
    
   }

  ngOnInit() {
    this._activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
    
    console.log(this.heroes);
  }

}
