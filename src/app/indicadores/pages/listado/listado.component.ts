import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../../services/indicadores.service';
import { Indicador } from '../../interfaces/indicador.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  indicadores: Indicador[] = [];
  
  

  

  constructor( private indicadoresService: IndicadoresService ) { }

  ngOnInit(): void {

    this.indicadoresService.getIndicadores()
        .subscribe( indicadores => this.indicadores = indicadores )    
      
 
}
}