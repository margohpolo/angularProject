import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from "./card/card.component";
import { FormsControlComponent } from "./forms-control/forms-control.component";
import { GridListComponent } from "./grid-list/grid-list.component";



const routes: Routes = [
  {
    path:'', component: CardComponent
  },
  {
    path:'card', component: CardComponent
  },
  {
    path:'grid-list', component: GridListComponent
  },
  {
    path:'forms-control', component: FormsControlComponent
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MaterialRoutingModule {}