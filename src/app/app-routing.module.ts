import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'administratives', loadChildren: () => import('./administratives/administratives.module').then(m => m.AdministrativesModule) }, { path: 'couriers', loadChildren: () => import('./couriers/couriers.module').then(m => m.CouriersModule) }, { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }, { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
