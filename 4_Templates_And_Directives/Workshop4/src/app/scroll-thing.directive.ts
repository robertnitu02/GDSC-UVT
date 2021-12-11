import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollThing]',
})
export class ScrollThingDirective {
  @Output() changeCountEmitter: EventEmitter<WheelEvent> =
    new EventEmitter<WheelEvent>();
  constructor() {}

  @HostListener('mousewheel', ['$event']) changeCount(event: WheelEvent): void {
    // console.log(event);
    this.changeCountEmitter.emit(event);
  }
}
