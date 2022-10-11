import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteGalleryComponent } from './component/site-gallery/site-gallery.component';
import { SiteHeroComponent } from './component/site-hero/site-hero.component';
import { SiteReviewsComponent } from './component/site-reviews/site-reviews.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SiteFeaturesComponent } from './component/site-features/site-features.component';
import { PaginaInicioComponent } from './page/pagina-inicio/pagina-inicio.component';
import { PaginaGaleriaComponent } from './page/pagina-galeria/pagina-galeria.component';
import { SiteWhatsappChatComponent } from './component/site-whatsapp-chat/site-whatsapp-chat.component';
import { SiteNavbarComponent } from './component/site-navbar/site-navbar.component';
import { SiteGalleryButtonComponent } from './component/site-gallery-button/site-gallery-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteGalleryComponent,
    SiteHeroComponent,
    SiteReviewsComponent,
    SiteFeaturesComponent,
    PaginaInicioComponent,
    PaginaGaleriaComponent,
    SiteWhatsappChatComponent,
    SiteNavbarComponent,
    SiteGalleryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
