import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../home-page/login/login.component';

const routes: Routes = [
  {path: 'users' , loadChildren: ()=>import('../users/users.module').then((user)=>user.UsersModule)},
  {path: 'products', loadChildren: ()=>import('../products/products.module').then((p)=>p.ProductsModule)},
  // {path: '', redirectTo: '/users', pathMatch:  'full'}
 { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
