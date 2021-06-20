import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceComponent } from "./service/service.component";
import { ServiceResolver } from "./serviceresolver.service";



const routes: Routes = [
  {
    path:':svcId', component: ServiceComponent, resolve: {svc: ServiceResolver}
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ServicesRoutingModule {}