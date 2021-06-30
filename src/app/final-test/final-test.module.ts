import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FinalTestRoutingModule } from "./final-test-routing.module";
import { FinalTestComponent } from "./final-test.component";
import { FTBoardAdminComponent } from "./ft-board-admin/ft-board-admin.component";
import { FTBoardUserComponent } from "./ft-board-user/ft-board-user.component";
import { FtLoginComponent } from "./ft-login/ft-login.component";
import { FTSignupformComponent } from "./ft-signupform/ft-signupform.component";
import { NgxEchartsModule } from 'ngx-echarts';
import { FtBoardChartComponent } from "./ft-board-admin/ft-board-chart/ft-board-chart.component";
import { FTUsersComponent } from "./ft-users/users.component";


@NgModule({
  declarations: [
    FinalTestComponent,
    FtLoginComponent,
    FTBoardAdminComponent,
    FTBoardUserComponent,
    FTSignupformComponent,
    FtBoardChartComponent,
    FTUsersComponent
  ],
  imports: [
    CommonModule,
    FinalTestRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
      // UserService
  ]
})
export class FinalTestModule { }