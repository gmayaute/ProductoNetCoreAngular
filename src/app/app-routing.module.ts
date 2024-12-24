import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';

const routes: Routes = [
  { path: 'productos', component: ListarProductosComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }