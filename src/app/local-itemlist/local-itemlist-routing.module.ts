import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocalItemListComponent } from "./local-itemlist.component"; 



const routes: Routes = [
  {
    path:'', component: LocalItemListComponent
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LocalItemListRoutingModule {}