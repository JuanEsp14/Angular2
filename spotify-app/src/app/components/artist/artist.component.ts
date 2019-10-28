import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista:any = {};
  loading:boolean;

  constructor( private router:ActivatedRoute,
               private spotify:SpotifyService
    ) {
      this.loading = true;  
      this.router.params.subscribe( params => {
        this.getArtist(params['id']);
        this.loading = false;
      })
   }
  
   getArtist(id:string){
      this.spotify.getArtist(id)
        .subscribe(artista => {
          console.log(artista);
          this.artista = artista;
        })
   }
  
}
