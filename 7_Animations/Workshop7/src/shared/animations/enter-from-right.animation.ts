import {animate, state, style, transition, trigger} from "@angular/animations";

export  const enterFromRightAnimation = trigger('enterFromRightAnimation', [
  state('onRight', style({right: '-1200px', backgroundColor: 'red'})),
  state('onCenter', style({right: '0px', backgroundColor: 'red'})),
  transition('onRight => onCenter', [animate('5s')]),
  transition('onCenter => onRight', [animate('1s')]),
]);
