import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SellItemModel } from '../../shared/model/sell-item.model';
import { removedMaterialVariables } from '@angular/material/schematics/ng-update/migrations/theming-api-v12/config';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() sellItemsList: SellItemModel[] = [];
  @Input() inCartList: SellItemModel[] = [];
  @Output() sellItemsListChange = new EventEmitter<SellItemModel[]>();

  constructor() {}

  ngOnInit(): void {}

  onItemClicked(sellItem: SellItemModel, i: number, status: string) {
    console.log(this.sellItemsList);
    console.log(this.inCartList);

    if (status.toLowerCase() == 'tocart') {
      if (this.inCartList.indexOf(sellItem, 0) != -1) {
        console.log('Elementul deja este in lista de cumparaturi!');
      } else {
        this.inCartList.push(sellItem);
        this.sellItemsList.pop();
      }
    } else if (status.toLowerCase() == 'tosell') {
      if (this.sellItemsList.indexOf(sellItem, 0) != -1) {
        console.log('Elementul deja este in lista de vanzare!');
      } else {
        this.sellItemsList.push(sellItem);
        this.inCartList.pop();
      }
    }
  }
}
