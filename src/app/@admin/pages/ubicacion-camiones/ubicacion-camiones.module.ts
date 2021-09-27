import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbicacionCamionesRoutingModule } from './ubicacion-camiones-routing.module';
import { UbicacionCamionesComponent } from './ubicacion-camiones.component';


@NgModule({
  declarations: [
    UbicacionCamionesComponent
  ],
  imports: [
    CommonModule,
    UbicacionCamionesRoutingModule
  ]
})
export class UbicacionCamionesModule { }
