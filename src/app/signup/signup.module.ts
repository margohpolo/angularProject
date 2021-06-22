import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page/page.component';
import { SignupformComponent } from './signupform/signupform.component';
import { SignuplistComponent } from './signuplist/signuplist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';


@NgModule({
  declarations: [
    PageComponent,
    SignupformComponent,
    SignuplistComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
