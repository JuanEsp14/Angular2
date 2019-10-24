import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean = true):string {
    if(activar){
      let salida = "";
      for (let i = 0; i < value.length; i++) {
        salida += '*';        
      }
      return salida;
    }
    return value;
  }

}
