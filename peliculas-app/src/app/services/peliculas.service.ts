import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "5bf50a4f4c6d701368f143eed42a6104";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private http : HttpClient) { }

  getPopulares(){
    let url = `${ this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
                    .pipe(map( (res:any)=>res.results));
  }

}
