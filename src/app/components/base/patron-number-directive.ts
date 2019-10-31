import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[patronNumber]'
})
export class PatronNumberDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;

    this.el.nativeElement.value = initalValue.replace(/[^0-4]/g, '');
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
