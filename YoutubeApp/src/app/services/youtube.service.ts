import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

 private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
 private apiKey:string = "AIzaSyD5wTzf1Z4NxXnoBProcNvfvcwKBJ8VQ1A";
 private playlistId:string = "UUuaPTYj15JSkETGnEseaFFg";
 private nextPageToken:string = "";

  constructor(private http:HttpClient) { }

  getVideos(){
    //Dos maneras de pasarle parámetros a la URL
    let url = `${ this.youtubeUrl }/playlistItems?part=snippet&maxResults=16&playlistId=UU1TaReAPiLPy1dyHopzlaqA&key=${ this.apiKey}`;
    let url2 = `${ this.youtubeUrl }/playlistItems`;
    let paramsString;
    let paramsObject;
    if (this.nextPageToken){
      paramsString = new HttpParams({
        fromString: `part=snippet&
                      maxResults=10&
                      playlistId=${this.playlistId}&
                      key=${this.apiKey}&
                      pageToken=${this.nextPageToken}`
      });
  
      paramsObject = new HttpParams({
        fromObject:{
          part: 'snippet',
          maxResults: '10',
          playlistId: this.playlistId,
          key: this.apiKey,
          pageToken: this.nextPageToken
        }
      });
    }else{
      paramsString = new HttpParams({
        fromString: `part=snippet&
                      maxResults=10&
                      playlistId=${this.playlistId}&
                      key=${this.apiKey}`
      });
  
      paramsObject = new HttpParams({
        fromObject:{
          part: 'snippet',
          maxResults: '10',
          playlistId: this.playlistId,
          key: this.apiKey,
        }
      });
    }

    return this.http.get( url2, {params:paramsObject})
            .pipe(map((res:any) => {
              console.log(res);
              this.nextPageToken = res.nextPageToken;

              let videos:any[] = [];
              for( let video of res.items ){
                videos.push(video.snippet);
              }

              return videos;
            }));
  }
}
