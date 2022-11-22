import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosServiciosComponent } from './Pages/productos-servicios/productos-servicios.component';



const routes: Routes = [
  {
    path:'', children:[
      {
        path:'ListProductos', component: ProductosServiciosComponent

    }
  ],

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagPrincipalRoutingModule { }
