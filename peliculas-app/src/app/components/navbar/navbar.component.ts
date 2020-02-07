import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  buscarPelicula(texto: String){
    if(texto.length == 0){
      return ;
    }
    this.router.navigate(['buscar', texto]);

  }

}
