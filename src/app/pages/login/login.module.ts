import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, CommonModule, LoginRoutingModule],
})
export class LoginModule {}
