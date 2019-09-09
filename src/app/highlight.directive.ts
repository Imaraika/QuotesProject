import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elm:ElementRef) {
    elm.nativeElement.style.background="red";
   }

}
