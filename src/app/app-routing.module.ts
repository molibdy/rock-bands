import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {path:'listado', component:ListadoComponent},
  {path:'detalle', component:DetalleComponent},
  {path: '', redirectTo: 'listado', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
