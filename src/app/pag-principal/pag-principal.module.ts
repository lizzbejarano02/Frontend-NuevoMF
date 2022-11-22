import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagPrincipalRoutingModule } from './pag-principal-routing.module';
import { ProductosServiciosComponent } from './Pages/productos-servicios/productos-servicios.component';
import { ListPlanesComponent } from './Pages/list-planes/list-planes.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';


@NgModule({
  declarations: [
    ProductosServiciosComponent,
    ListPlanesComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PagPrincipalRoutingModule
  ],
  exports:[
    ProductosServiciosComponent
  ]
})
export class PagPrincipalModule { }
