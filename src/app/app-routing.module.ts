import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'users' , loadChildren: ()=>import('../users/users.module').then((user)=>user.UsersModule)},
  {path: 'products', loadChildren: ()=>import('../products/products.module').then((p)=>p.ProductsModule)},
  {path: '', redirectTo: '/users', pathMatch:  'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
