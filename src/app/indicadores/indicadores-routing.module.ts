import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { DetallePrecioComponent } from './pages/detalle-precio/detalle-precio.component';

const routes: Routes = [
  {
    path:'listado',
    component: ListadoComponent
  },
  {
    path:'precios/:id',
    component: DetallePrecioComponent
  },
  {
    path:':id',
    component:IndicadorComponent
  },
  {
    path: '**',
    redirectTo: 'listado'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresRoutingModule { }
