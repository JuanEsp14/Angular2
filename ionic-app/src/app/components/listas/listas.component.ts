import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(private deseosService:DeseosService, private router:Router, private alertCtrl:AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista:Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
    
  }

  async editarLista(lista:Lista){
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log('Cancelar')
          }
        },
        {
          text: 'Editar',
          handler: (data) =>{
            console.log(data);
            if( data.titulo.length === 0){
              return; 
            }
  
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
          }
        }
      ]
    });

    await alert.present();

  }

  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
  }

}
