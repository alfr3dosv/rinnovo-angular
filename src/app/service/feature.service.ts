import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feature } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  getFeatures(): Observable<Feature[]> {
    return of([
      {
        title: 'Calidad',
        description: 'Nuestros clientes nos respaldan'
      },
      {
        title: 'Atención personalizada',
        description: 'Diseños que se adaptan a tus gustos y tu presupuesto'
      },
      {
        title: 'Pago a credito ',
        description: 'Contamos con terminal para realizar pagos a plazos fijos'
      },
      {
        title: 'Entrega express',
        description: 'Entrega de 3 a 5 semanas'
      },
      {
        title: 'Instalación express',
        description: 'Instalación en 1 dia'
      },
    ])
  }
}
