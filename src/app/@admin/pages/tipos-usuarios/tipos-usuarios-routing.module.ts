import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposUsuariosComponent } from './tipos-usuarios.component';

const routes: Routes = [{
  path:'',
  component: TiposUsuariosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposUsuariosRoutingModule { }
