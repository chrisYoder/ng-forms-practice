import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginForm1Component } from './login-form1/login-form1.component';


const routes: Routes = [
  { path: 'loginForm1', component: LoginForm1Component }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LoginRoutingModule { }
