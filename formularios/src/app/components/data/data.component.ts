import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  forma:FormGroup;

  usuario:Object = {
    nombrecompleto:{
      nombre: "juan",
      apellido: "Espinoza"
    },
    correo: "juan.espinoza@corre.com",
    pasatiempos: ["Correr", "Dormir", "Comer"]
  }

  constructor() { 
    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', Validators.required)
      }),
      'correo':  new FormControl('', [Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    });
    //Se pueden setear los datos del usuario, ya que tiene la misma esttuctura
    //y los campos se llaman de la misma manera que los de la validación
    //this.forma.setValue(this.usuario);
  }

  guardarCambios(){
    console.log(this.forma);
    console.log(this.forma.value);

    //Se pueden reiniciar los datos unna vez que se guarda el dato
    //de está manera permito que se cargue alguien nuevamente
    this.forma.reset({
      nombrecompleto:{
        nombre: "",
        apellido: ""
      },
      correo: ""
    });
  }

  agregarPasatiempo(){
    (<FormArray> this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    )
  }
}