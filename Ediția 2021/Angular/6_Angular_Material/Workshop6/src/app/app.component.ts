import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Workshop6';
  // For minigame
  points = 0;
  valueToIncrease = 1;
  // For navbar
  opened = false;
  // For minigame button
  centered = false;
  disabled = false;
  unbounded = true;
  radius = 60;
  color = 'darkcyan';

  increasePoints(valueToIncrease: number) {
    this.points += valueToIncrease;
  }
}
