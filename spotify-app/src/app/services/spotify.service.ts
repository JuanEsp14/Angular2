import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewRealeses(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBCyVbnk3R8S5CH0rJL2su-jxlTTZLFHjS_wm46_xdiDz7v-kXCaRUKkWnu5LCX7qRuTfuGv-LEkK4R0Gs'
      }
    )
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      })
  }
}
