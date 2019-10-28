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
      'Authorization': 'Bearer BQA4uBALa_1faE7StJ-MBRYQonHwJdK1ptwvGJYuQjH4ryR2xU9uPbs9QMQswhSo0-5XdKfdOBxxfB5TcWI'
      }
    )
    
    return this.http.get(url, {headers});


  }

  getNewRealeses(){
    return this.getQuery('browse/new-releases')
              .pipe( map( data => data['albums'].items));
  }

  getArtist(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data =>  data['artists'].items));
  }
}
