import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


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
        'apellido': new FormControl('', [
                                          Validators.required,
                                          this.noHerrera
                                    ])
      }),
      'correo':  new FormControl('', [Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('',Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });
    //Se pueden setear los datos del usuario, ya que tiene la misma esttuctura
    //y los campos se llaman de la misma manera que los de la validación
    //this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      //El bind see agrega para indicarle qué será this dentro de la función  igual
      //esto se debe hacer ya que al agregar las validaciones de esta manera, se cambia el contexto
      //al ejecutarse la función
      this.noIgual.bind(this.forma)
    ])
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

  noHerrera(controls: FormControl):{[s:string]:boolean}{
    if(controls.value === "herrrera"){
      return{
        noherrera:true
      }
    }

    return null;
  }

  noIgual(controls: FormControl):{[s:string]:boolean}{
    let forma:any = this;
    if(controls.value !== forma.controls['password1'].value){
      return{
        noiguales:true
      }
    }

    return null;
  }

  existeUsuario(control:FormControl):Promise<any>|Observable<any>{
    let promesa = new Promise(
      (resolve, reject) =>{
        setTimeout(()=>{
          if(control.value === "strider"){
            resolve([{existe:true}]);
          }else{
            resolve(null);
          }
        }, 3000)
      }
    )
    return promesa;
  }
}