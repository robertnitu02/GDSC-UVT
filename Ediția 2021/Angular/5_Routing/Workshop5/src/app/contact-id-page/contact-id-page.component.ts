import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-id-page',
  templateUrl: './contact-id-page.component.html',
  styleUrls: ['./contact-id-page.component.scss'],
})
export class ContactIdPageComponent implements OnInit {
  currentID: number = -1;
  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentID = +this.route.snapshot.paramMap.get('id')!;
  }
}
