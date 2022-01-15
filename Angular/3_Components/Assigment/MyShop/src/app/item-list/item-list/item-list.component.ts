import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SellItemModel } from '../../shared/model/sell-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() sellItemsList: SellItemModel[] = [];
  @Input() inCartList: SellItemModel[] = [];
  @Output() inCartListOutput: SellItemModel[] = [];
  @Output() sellItemsListChange = new EventEmitter<SellItemModel[]>();
  input1: any;
  input2: any;

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
        this.sellItemsList.splice(i, 1);
      }
    } else if (status.toLowerCase() == 'tosell') {
      if (this.sellItemsList.indexOf(sellItem, 0) != -1) {
        console.log('Elementul deja este in lista de vanzare!');
      } else {
        this.sellItemsList.push(sellItem);
        this.inCartList.splice(i, 1);
      }
    }
  }

  addToAdoptCatsList() {
    if (this.input1 != undefined) {
      let item: SellItemModel = {
        cat_alt: "cat",
        cat_photo: this.input1
      };
      this.sellItemsList.push(item);
      // console.log(this.input1);
      // var string = "{\"cat_photo\": \"" + this.input1 + "\", \"cat_alt\": \"cat\"}";
      // console.log(string);
    }
    this.input1 = undefined;
  }

  addToAdoptedCatsList() {
    if (this.input2 != undefined) {
      let item: SellItemModel = {
        cat_alt: "cat",
        cat_photo: this.input2
      };
      this.inCartList.push(item);
      // console.log(this.input2);
    }
    this.input2 = undefined;
  }
}
