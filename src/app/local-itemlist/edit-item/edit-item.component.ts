import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Item, LocalItemListService } from '../local-itemlist.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  @ViewChild('f', { static: false }) editForm: NgForm;
  subscription:Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem: Item;

  constructor(private localItemListService: LocalItemListService) { }

  ngOnInit() {
    this.subscription = this.localItemListService.startedEditing.subscribe((index:number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.localItemListService.getItem(index);
      this.editForm.setValue({ Item: this.editedItem.item, Quantity: this.editedItem.quantity });
    });
  }
  
  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newItem = new Item(value.Item, value.Quantity);
    if(this.editMode) {
      this.localItemListService.updateItem(this.editedItemIndex, newItem);
    }
    else { 
      // console.log(typeof newItem, newItem);
      this.localItemListService.addItem(newItem); 
    }
    this.onClear();
  }

  onDelete() {
    this.localItemListService.deleteItem(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
