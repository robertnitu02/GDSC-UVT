import { Component } from '@angular/core';
import {SellItemModel} from "./shared/models/sell-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sellItemsList: SellItemModel[] = [
    {
      name: "Cartofi",
      price: 5,
      stock: 50,
      imgUrl: 'https://www.cora.ro/images/products/1808284/gallery/1808284_hd_1.jpg',
    },
    {
      name: "Salata Verde",
      price: 3.5,
      stock: 50,
      imgUrl: 'https://www.cora.ro/images/products/1808925/gallery/1808925_hd_1.jpg',
      imgAlt: 'poza-cu-salata-verde',
    },
    {
      name: "Varza",
      price: 2.5,
      stock: 50,
      imgUrl: 'https://www.csid.ro/wp-content/uploads/2015/11/10906858/1-varza.jpg',
      imgAlt: 'poza-cu-varza',
    },
    {
      name: "Rosii",
      price: 6,
      stock: 50,
      imgUrl: 'https://www.auchan.ro/public/images/hc9/h4a/h00/rosii-romanesti-pretkg-8925744431134.jpg',
      imgAlt: 'poza-cu-rosii',
    },
    {
      name: "Ciuperci",
      price: 10,
      stock: 35,
      imgUrl: 'https://www.cora.ro/images/products/1810315/gallery/1810315_hd_1.jpg',
      imgAlt: 'poza-cu-ciuperci',
    }
  ];

  title = 'Workshop3';

  onItemClicked($event: SellItemModel) {
    // console.log($event);
  }
}
