import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIdPageComponent } from './contact-id-page.component';

describe('ContactIdPageComponent', () => {
  let component: ContactIdPageComponent;
  let fixture: ComponentFixture<ContactIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactIdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
