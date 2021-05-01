import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Indicador } from '../interfaces/indicador.interface';


@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  private baseUrl: string = environment.baseUrl;
  
  
  constructor( private http: HttpClient ) { }


  getIndicadores(): Observable<Indicador[]> {
    return this.http.get<Indicador[]>( this.baseUrl )
    
  }
 
 
}
