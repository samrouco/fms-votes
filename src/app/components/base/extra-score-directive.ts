import { Directive, ElementRef, HostListener, Input, Host } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[extraScoreNumber]'
})
export class ExtraScoreNumberDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;

    this.el.nativeElement.value = initalValue.replace(/[^0-4]/g, '');
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
