import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalItemListComponent } from './local-itemlist.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalItemListService } from './local-itemlist.service';
import { LocalItemListRoutingModule } from './local-itemlist-routing.module';



@NgModule({
  declarations: [LocalItemListComponent, EditItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocalItemListRoutingModule
  ],
  providers: [
      LocalItemListService
  ]
})
export class LocalItemlistModule { }
