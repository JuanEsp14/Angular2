import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-e8abf.firebaseio.com';

  constructor(private http:HttpClient) { }

  crearHeroe(heroe:HeroeModel){
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe(
        map((resp:any) => {
          heroe.id =resp.name;
          return heroe;
        })
      );
  }

  actualizarHeroe(heroe:HeroeModel){
    //Se eliminar la referencia del ID para que al actualizar no lo guarde en la base
    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  borrarHeroe(id: String){
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  getHeroe(id:String){
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`)
          .pipe(
            map(this.crearArreglo)
          );
  }

  //Transformamos la respuesta de firebase poniendo su información en un arreglo
  //correspondiente al model de datos que estamos manejando
  private crearArreglo(heroesObj: object){

    const heroes: HeroeModel[] = [];

    if (heroesObj === null ){return [];}

    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key]
      heroe.id = key;

      heroes.push(heroe);
    })
    return heroes;
  }
}
