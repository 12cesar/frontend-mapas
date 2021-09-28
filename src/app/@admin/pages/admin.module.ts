import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { BroadcastComponent } from '../core/components/broadcast/broadcast.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BroadcastComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
