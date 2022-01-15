import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestGuardGuard } from './test-guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Workshop5';

  constructor(public router: Router) {}
}
