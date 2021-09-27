import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicacionCamionesComponent } from './ubicacion-camiones.component';

const routes: Routes = [{
path:'',
component: UbicacionCamionesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbicacionCamionesRoutingModule { }
