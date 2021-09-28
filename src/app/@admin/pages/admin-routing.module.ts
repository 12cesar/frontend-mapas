import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
{
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
      path: 'usuarios',
      loadChildren: () =>
        import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
    },
    {
      path: 'ubicacion-camiones',
      loadChildren: () =>
        import('./ubicacion-camiones/ubicacion-camiones.module').then((m) => m.UbicacionCamionesModule),
    },
    {
      path: 'ubicacion-tachos',
      loadChildren: () =>
        import('./ubicacion-tachos/ubicacion-tachos.module').then((m) => m.UbicacionTachosModule),
    },
    {
      path: 'tipo-usuarios',
      loadChildren: () =>
        import('./tipos-usuarios/tipos-usuarios.module').then((m) => m.TiposUsuariosModule),
    },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
