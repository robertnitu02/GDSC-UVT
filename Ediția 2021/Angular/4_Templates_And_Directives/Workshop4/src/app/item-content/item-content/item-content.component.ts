import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss'],
})
export class ItemContentComponent implements OnInit {
  // isLoggedIn = false;
  allData = [
    {
      list: ['a', 'e', 'i', 'o', 'u'],
      counter: 1,
    },
    {
      list: [
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        // 'k',
        'l',
        // 'm',
        'n',
        'p',
        'q',
        'r',
        // 's',
        't',
        'v',
        'w',
        // 'x',
        // 'y',
        'z',
      ],
      counter: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onCounterChanged(event: WheelEvent, i: number) {
    // console.log('scroll wheel event from ' + i);
    this.allData[i].counter += event.deltaY > 0 ? -1 : 1;
    this.allData[i].counter =
      this.allData[i].counter < 1 ? 1 : this.allData[i].counter;
    this.allData[i].counter =
      this.allData[i].counter > 100 ? 100 : this.allData[i].counter;
  }
}
