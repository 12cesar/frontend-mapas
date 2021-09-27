import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbicacionTachosRoutingModule } from './ubicacion-tachos-routing.module';
import { UbicacionTachosComponent } from './ubicacion-tachos.component';


@NgModule({
  declarations: [
    UbicacionTachosComponent
  ],
  imports: [
    CommonModule,
    UbicacionTachosRoutingModule
  ]
})
export class UbicacionTachosModule { }
