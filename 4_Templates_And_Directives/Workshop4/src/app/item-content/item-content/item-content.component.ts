import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss'],
})
export class ItemContentComponent implements OnInit {
  isLoggedIn = false;
  listaVocale = ['a', 'e', 'i', 'o', 'u'];
  listaConsoane = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  constructor() {}

  ngOnInit(): void {}
}
