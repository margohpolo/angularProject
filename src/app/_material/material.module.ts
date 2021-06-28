import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialRoutingModule } from './material-routing.module';
import {MatCardModule} from '@angular/material/card';
import { GridListComponent } from './grid-list/grid-list.component';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsControlComponent } from './forms-control/forms-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';



@NgModule({
  declarations: [CardComponent, GridListComponent, FormsControlComponent, DatepickerComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class MaterialModule { }
