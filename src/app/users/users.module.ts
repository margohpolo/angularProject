import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { UserService } from "./user.service";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { UserformComponent } from './userform/userform.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserformComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
      UserService
  ]
})
export class UsersModule { }