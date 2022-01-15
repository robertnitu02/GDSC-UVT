import { Component } from '@angular/core';
import {fadeInOutAnimation} from "../shared/animations/fade-in-out.animation";
import {enterFromRightAnimation} from "../shared/animations/enter-from-right.animation";

export enum AnimationState {
  ON_CENTER = 'onCenter',
  ON_RIGHT = 'onRight'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOutAnimation, enterFromRightAnimation]
})
export class AppComponent {
  title = 'Workshop7';
  isHelloVisible = true;

  isAnotherHelloVisible = 'onRight';

  versuri = ['Ce se-aude, ce e oare?', '[..] La fereşti se-aprind, se sting…', 'Vine, vine, vine Moş Crăciun!', 'Ho-ho-ho! E pe drum…'];

  changeHelloVisible() {
    this.isHelloVisible = !this.isHelloVisible;
  }

  changeAnotherHelloVisible() {
    this.isAnotherHelloVisible =
      (this.isAnotherHelloVisible == AnimationState.ON_RIGHT) ? AnimationState.ON_CENTER : AnimationState.ON_RIGHT;
  }
}
