import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBYd5BI3qIA0Qfra3OrrrQ9akjsnWWU4lSLlyx-VTT7o8DYSVhy0mwnTadLgUaw102V5jrcaeKnjQO5pso'
      }
    )
    
    return this.http.get(url, {headers});


  }

  getNewRealeses(){
    return this.getQuery('browse/new-releases')
              .pipe( map( data => data['albums'].items));
  }

  getArtists(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data =>  data['artists'].items));
  }

  getArtist(id:string){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
      .pipe(map (data => data['tracks']));
  }
}
