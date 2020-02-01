import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes()
      .subscribe(resp => {
        this.cargando = false;
        this.heroes = resp
      });
      
    }

  borrarHeroe( heroe: HeroeModel, i: number){
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro de borrar a ${heroe.nombre}`,
      showCancelButton: true,
      showConfirmButton: true
    }).then(resp =>{      
        if(resp.value){
          this.heroesService.borrarHeroe(heroe.id).subscribe( () =>
            this.heroes.splice(i, 1)
          );
        }
      }
    );
    
  }

}
