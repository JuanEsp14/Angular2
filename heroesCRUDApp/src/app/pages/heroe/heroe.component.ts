import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:HeroeModel = new HeroeModel();

  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
  }
  guardar(form: NgForm){
    if(form.invalid){
      console.log("formulario no válido");
      return;
    }
    
    this.heroesService.crearHeroe(this.heroe)
      .subscribe((resp:HeroeModel) => {
        console.log(resp);
        this.heroe = resp;
      });
  }

}
