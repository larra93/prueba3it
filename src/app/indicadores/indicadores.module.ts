import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { DetallePrecioComponent } from './pages/detalle-precio/detalle-precio.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, ListadoComponent, IndicadorComponent, DetallePrecioComponent],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    SharedModule
  ]
})
export class IndicadoresModule { }
