import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginForm1Component } from './login-form1/login-form1.component';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [LoginForm1Component, LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ], 
  exports: [
    LoginForm1Component
  ]
})
export class LoginFormModule { }
