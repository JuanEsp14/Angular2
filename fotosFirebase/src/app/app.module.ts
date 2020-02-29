import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { APP_ROUTES } from './app.routes';
import { CargaImagenesService } from './services/carga-imagenes.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    APP_ROUTES
  ],
  providers: [
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
