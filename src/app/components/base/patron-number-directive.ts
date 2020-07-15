import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[patronNumber]'
})
export class PatronNumberDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;

    //this.el.nativeElement.value = initalValue.replace(/[^0-4]/g, '');
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    console.log(event);

    //arrowUp
    if (event.keyCode == 38) {
      var htmlElement = document.getElementById(document.activeElement.id) as HTMLInputElement;

      if (htmlElement != undefined) {
        if (htmlElement.value.length == 0) {
          htmlElement.value = "0,5";
        } else if (!htmlElement.value.endsWith(",5") && htmlElement.value != "4" ) {
          htmlElement.value = htmlElement.value + ",5";
        }

        htmlElement.dispatchEvent(new Event("input"));
      }
    }

    //delete o backspace
    if(event.keyCode == 46 || event.keyCode == 8){
      var htmlElement = document.getElementById(document.activeElement.id) as HTMLInputElement;
      if (htmlElement != undefined && htmlElement.value.endsWith(",5")) {
          htmlElement.value = "";
          htmlElement.dispatchEvent(new Event("input"));
      }
    }
  }
}
