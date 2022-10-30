import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaGaleriaComponent } from './page/pagina-galeria/pagina-galeria.component';
import { PaginaInicioComponent } from './page/pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: PaginaInicioComponent},
  {path: 'galeria', pathMatch: 'full', component: PaginaGaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
