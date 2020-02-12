import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core'
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';


//El entryComponents se debe agregar cuando las pantallas tienen comportamiento dinámico
//como los popups del mapa component 

@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCogXeH-yxi44MP_abLxDrGLBHJ-Syvnw4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
