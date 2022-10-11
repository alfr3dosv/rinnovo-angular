import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Review } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReviews(): Observable<Review[]> {
    return of([
      {
        name: 'Sonia Hernandez',
        comment: 'Excelente servicio, muy puntual la entrega acordada, me encantó el diseño de cocina y closet 🙂',
      },
      {
        name: 'Jenni Rodríguez Treviño',
        comment: 'Excelente el trato muy amable siempre, me gusto mucho mi cocineta, justo como la pedí muy recomendado.',
      },
      {
        name: 'Janeth Lopez',
        comment: 'Super recomendados a muy buen precio,trabaja sobre el diseño deseado y cumpliendo con los tiempos acordados muy buen servicio la verdad'
      }, 
      {
        name: 'Dany Cavazos M',
        comment: 'Excelente servicio y calidad en el trabajo'
      },
      {
        name: 'Aron Villanueva',
        comment: 'Servicio excelente, respeta al 100% los tiempos, cálidad total y precio super accesible, quedamos encatantados con el trabajo realizado, lo recomiendo ampliamente, de antemano gracias y seguiremos en contacto para nuevos proyectos.'
      }, 
      {
        name: 'Gina Ruiz',
        comment: 'Excelente su servicio. Trabajo personalizado, muy atentos, a buen precio y entrega en el tiempo acordado.  Muy puntuales y bien hecho. Quede muy contenta. Gracias. Muy recomendable.'
      }
    ])
  }
}
