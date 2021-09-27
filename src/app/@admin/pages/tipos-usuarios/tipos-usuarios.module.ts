import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposUsuariosRoutingModule } from './tipos-usuarios-routing.module';
import { TiposUsuariosComponent } from './tipos-usuarios.component';


@NgModule({
  declarations: [
    TiposUsuariosComponent
  ],
  imports: [
    CommonModule,
    TiposUsuariosRoutingModule
  ]
})
export class TiposUsuariosModule { }
