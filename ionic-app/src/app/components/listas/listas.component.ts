import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(private deseosService:DeseosService, private router:Router) { }

  ngOnInit() {}

  editarLista(lista:Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
    
  }

  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
  }

}
