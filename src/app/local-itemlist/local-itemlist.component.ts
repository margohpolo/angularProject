import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Item, LocalItemListService } from "./local-itemlist.service";



@Component({
  selector: 'app-local-itemlist',
  templateUrl: './local-itemlist.component.html',
  providers: [LocalItemListService]
})

export class LocalItemListComponent implements OnInit, OnDestroy {

    items: Item[];
    private subscription: Subscription;
    seshItems: Item[];

    constructor(private localItemListService: LocalItemListService) {}

    ngOnInit(){
        this.items = this.localItemListService.getItems();
        this.subscription = this.localItemListService.itemsChanged.subscribe((itemList:Item[]) => {this.items = itemList;});
        this.seshItems = JSON.parse(sessionStorage.getItem("Items"));
        console.log("seshItems:", this.seshItems);
    }

    ngDoCheck() {
        sessionStorage.setItem("Items", JSON.stringify(this.items));
        console.log("seshStorage:", JSON.parse(sessionStorage.getItem("Items")));
        this.seshItems = JSON.parse(sessionStorage.getItem("Items"));
        console.log("seshItems:", this.seshItems);
    }

    onEditItem(index:number) {
        this.localItemListService.startedEditing.next(index);
    }

    ngOnDestroy() { this.subscription.unsubscribe(); }

}