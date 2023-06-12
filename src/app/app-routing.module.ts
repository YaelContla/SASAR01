import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ConfirmacionAgendaComponent } from './pages/confirmacion-agenda/confirmacion-agenda.component';
import { DatosSesionComponent } from './pages/datos-sesion/datos-sesion.component';
import { CorreoComponent } from './pages/correo/correo.component';
import { CorreoSesionInformativaComponent } from './pages/correo-sesion-informativa/correo-sesion-informativa.component';
import { DatosSesionDGEComponent } from './pages/datos-sesion-dge/datos-sesion-dge.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ConfirmacionReunionComponent } from './pages/confirmacion-reunion/confirmacion-reunion.component';

const routes: Routes = [

  {
    path:'', component: PagesComponent,
    children: [
      { path: 'datos-2', component: DatosSesionDGEComponent },
      { path: 'datos', component: DatosSesionComponent },
      { path: 'agenda', component: ConfirmacionAgendaComponent },
      { path: 'correo', component: CorreoComponent },
      { path: 'correo-sesion-informativa', component: CorreoSesionInformativaComponent},
      { path: 'confirmacion-reunion', component: ConfirmacionReunionComponent },

      // { path: '404', component: Error404PageComponent},

      // { path:'', redirectTo: 'datos' }

      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
