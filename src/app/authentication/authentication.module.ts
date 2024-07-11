import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [SignupComponent, LoginComponent, AccessControlComponent],
    imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
