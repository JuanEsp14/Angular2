import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos:any[] = [];
  videoSeleccionado:any;

  constructor(public _yts:YoutubeService) { 
    this._yts.getVideos().subscribe( videos =>{
      console.log(videos);
      this.videos = videos;
    });
  }

  ngOnInit() {
  }

  verVideo( video:any){
    this.videoSeleccionado = video;
    $('#modal').modal();
  }

  cerrarModal( video:any){
    this.videoSeleccionado = null;
    $('#modal').modal('hide');
  }

  cargarMas(){
    this._yts.getVideos().subscribe( videos =>{
      console.log(videos);
      this.videos = this.videos.concat(videos);
    });
  }

}
