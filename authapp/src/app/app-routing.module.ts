import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';


const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'precios', component: PrecioComponent},
    {
        path:'protegida', 
        component: ProtegidaComponent,
        canActivate: [ AuthGuard ]
    },
    {path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule
    (
    {
        exports: [RouterModule],
        imports: [RouterModule.forRoot(routes)],
    }
    )
export class AppRoutingModule {}