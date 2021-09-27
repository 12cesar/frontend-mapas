import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicacionTachosComponent } from './ubicacion-tachos.component';

const routes: Routes = [{
  path:'',
  component: UbicacionTachosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbicacionTachosRoutingModule { }
