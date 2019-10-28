import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  loading:boolean;
  error:boolean;
  messageError:string;

  constructor( private spotify:SpotifyService ) { 

    this.loading = true;
    this.error = false;
    this.spotify.getNewRealeses()
      .subscribe( (data:any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },(errorServicio) => {
        this.loading = false;
        this.messageError = errorServicio.error.error.message;
        this.error = true;
      });    
  }

  ngOnInit() {
  }

}
