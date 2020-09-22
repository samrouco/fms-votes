import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[patronNumber]'
})
export class PatronNumberDirective {

  constructor(private el: ElementRef) { }



  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    //arrowUp
    if (event.keyCode == 38) {
      var htmlElement = document.getElementById(document.activeElement.id) as HTMLInputElement;

      if (htmlElement != undefined) {
        if (htmlElement.value.length == 0) {
          htmlElement.value = "0.5";
        } else if (!htmlElement.value.endsWith(".5") && htmlElement.value != "4") {
          htmlElement.value = htmlElement.value + ".5";
        }

        htmlElement.dispatchEvent(new Event("input"));
      }
    }

    //delete o backspace o tab
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9) {
      var htmlElement = document.getElementById(document.activeElement.id) as HTMLInputElement;
      if (htmlElement != undefined && htmlElement.value.endsWith(",5")) {
        console.log("WARNING");
        //htmlElement.value = "";
        htmlElement.dispatchEvent(new Event("input"));
      }
    }else if (event.keyCode < 48 || event.keyCode > 52) { // Si no esta entre 0 o 4
      return false;
    }

  }
}
