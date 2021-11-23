import { Component } from '@angular/core';
import { SellItemModel } from 'src/app/shared/model/sell-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MyShop';

  sellItemsList: SellItemModel[] = [
    {
      product_name: 'item1',
      price: 1000,
      stock: 1,
    },
    {
      product_name: 'item2',
      price: 2000,
      stock: 2,
    },
  ];

  inCartList: SellItemModel[] = [];
}
