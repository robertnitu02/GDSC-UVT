import {animate, style, transition, trigger} from "@angular/animations";

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition(':enter', [
    style({opacity: 0}),
    animate('1s', style({opacity: 1}))
  ]),
  transition(':leave', [
    animate('1s', style({opacity: 0}))
  ])
]);
