import { NgModule } from '@angular/core';
import { PagPrincipalModule } from './pag-principal/pag-principal.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './principal/barra-navegacion/barra-navegacion.component';
import { PrincipalComponent } from './principal/principal.component';
import { PiePaginaComponent } from './principal/pie-pagina/pie-pagina.component';
import { InicioComponent } from './principal/inicio/inicio.component';
import { VisionComponent } from './principal/vision/vision.component';
import { MisionComponent } from './principal/mision/mision.component';
import { AcercadeNosotrosComponent } from './principal/acercade-nosotros/acercade-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PrincipalComponent,
    PiePaginaComponent,
    InicioComponent,
    VisionComponent,
    MisionComponent,
    AcercadeNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagPrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
