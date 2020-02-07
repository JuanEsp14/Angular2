import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "5bf50a4f4c6d701368f143eed42a6104";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  peliculas:any[] = [];

  constructor(private http : HttpClient) { }

  getPopulares(){
    let url = `${ this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
                    .pipe(map( (res:any)=>res.results));
  }

  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(desde.getDate()+7);

    let desdeStr = this._armarFecha(desde);
    let hastaStr = this._armarFecha(hasta);

    let url = `${ this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
                    .pipe(map( (res:any)=>res.results));
  }

  private _armarFecha(date: Date){
    let fecha = "";
    let mes = "";
    let dia = "";
    (date.getMonth()+1 < 10) ? mes = `0${date.getMonth()+1}` : mes = `${date.getMonth()+1}`;
    (date.getDate() < 10) ? dia = `0${date.getDate()}` : dia = `${date.getDate()}`;
    
    fecha = `${date.getFullYear()}-${mes}-${dia}`;

    return fecha;
  }

  getPopularesNinos(){
    let url = `${ this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=R&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
                    .pipe(map( (res:any)=>res.results));
  }

  buscarPelicula(texto:string){
    let url = `${ this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(map((res:any)=>{
      this.peliculas = res.results;
      console.log(res.results);
      return res.results;
    }));
  }

  getPelicula(id:string){
    let url = `${ this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(map((res:any)=>{
      this.peliculas = res;
      console.log(res);
      return res;
    }));
  }

}
