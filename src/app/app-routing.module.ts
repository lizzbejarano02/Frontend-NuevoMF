import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: PrincipalComponent },
{
  path:'Listado', loadChildren:()=>import('./pag-principal/pag-principal.module').then(m => m.PagPrincipalModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
