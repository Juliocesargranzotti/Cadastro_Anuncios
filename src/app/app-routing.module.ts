import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'cadastro', component: CadastroComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
