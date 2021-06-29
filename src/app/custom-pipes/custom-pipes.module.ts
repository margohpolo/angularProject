import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomPipesRoutingModule } from "./custom-pipes-routing.module";
import { CustomPipesComponent } from "./custom-pipes.component";
import { ManyTypesPipe } from './many-types.pipe';


@NgModule({
    declarations: [CustomPipesComponent, ManyTypesPipe],
    imports: [CommonModule, CustomPipesRoutingModule],
    providers: []
})

export class CustomPipesModule {}