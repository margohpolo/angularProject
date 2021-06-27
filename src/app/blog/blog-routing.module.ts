import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { SinglepostComponent } from "./singlepost/singlepost.component";



const routes: Routes = [
  {
    path:'', component: BlogComponent
  },
  {
    path:':postId', component: SinglepostComponent
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlogRoutingModule {}