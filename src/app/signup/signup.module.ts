import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page/page.component';
import { SignupformComponent } from './signupform/signupform.component';
import { SignuplistComponent } from './signuplist/signuplist.component';


@NgModule({
  declarations: [
    PageComponent,
    SignupformComponent,
    SignuplistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SignupModule { }
