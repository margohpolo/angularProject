import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';


export class Item { constructor(public item:string, public quantity:number){} }


@Injectable()
export class LocalItemListService {
    
    itemsChanged = new Subject<Item[]>();
    startedEditing = new Subject<number>();
    private items: Item[] = [
        new Item('Item One', 1),
        new Item('Item Two', 2),
    ];
    
    getItems() {
        return this.items.slice();
    }

    getItem(index:number) { return this.items[index]; }

    addItem(item:Item) {
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    }

    updateItem(index:number, newItem:Item) {
        this.items[index] = newItem;
        this.itemsChanged.next(this.items.slice());
    }

    deleteItem(index:number) {
        this.items.splice(index, 1);
        this.itemsChanged.next(this.items.slice());
    }

    // constructor() {}

}