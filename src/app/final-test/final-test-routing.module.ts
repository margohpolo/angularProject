import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinalTestComponent } from "./final-test.component";
import { FTBoardAdminComponent } from "./ft-board-admin/ft-board-admin.component";
import { FtLoginComponent } from "./ft-login/ft-login.component";
import { FTSignupformComponent } from "./ft-signupform/ft-signupform.component";
import { FTUsersComponent } from "./ft-users/users.component";



const routes: Routes = [
  {
    path:'', component: FinalTestComponent
  },
  {
    path:'ft-login', component: FtLoginComponent
  },
  {
    path:'ft-signup', component: FTSignupformComponent
  },
  {
    path:'admin', component: FTBoardAdminComponent
  },
  {
    path:'users', component: FTUsersComponent
  }
  
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FinalTestRoutingModule {}