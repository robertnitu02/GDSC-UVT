import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SellItemModel} from "../shared/models/sell-item.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() sellItemsList: SellItemModel[] = [];
  @Output() sellItemsListChange = new EventEmitter<SellItemModel[]>();
  @Output() onSellItemClicked = new EventEmitter<SellItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(sellItem: SellItemModel, i: number) {
    this.sellItemsList[i].stock = this.sellItemsList[i].stock - (this.sellItemsList[i].stock != 0 ? 1 : 69);
    this.onSellItemClicked.emit(sellItem);
  }
}
