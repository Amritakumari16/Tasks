import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component'
import {LoginLayoutComponent} from './components/login-layout/login-layout.component'
const routes: Routes = [
  {
    path: 'app', component: MainLayoutComponent, children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: '**', redirectTo: '/login' },
      { path: '*', redirectTo: '/login' },
    ]
  },
  {
    path: '', component: LoginLayoutComponent, children: [
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: '**', redirectTo: '/login' },
      { path: '*', redirectTo: '/login' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
