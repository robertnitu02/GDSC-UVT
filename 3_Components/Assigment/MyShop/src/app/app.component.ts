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
      cat_photo: 'https://i.imgur.com/S1dunqm.jpg',
      cat_alt: 'cat 3',
    },
    {
      cat_photo: 'https://i.imgur.com/otpUuNs.jpg',
      cat_alt: 'cat 2',
    },
    {
      cat_photo: '',
      cat_alt: 'cat 3',
    },
    {
      cat_photo: 'https://th.bing.com/th/id/R.5228d6aef0e0efde5bccc4220def2c3f?rik=wS24gq1vnUkhrQ&pid=ImgRaw&r=0',
      cat_alt: 'cat 4',
    },
    {
      cat_photo: 'https://th.bing.com/th/id/OIP.bRtlDIYURd4Hw7QDVY1XLgFZC1?pid=ImgDet&rs=1',
      cat_alt: 'cat 5',
    }
  ];

  inCartList: SellItemModel[] = [];
}
