
import { Directive,Input, TemplateRef } from '@angular/core';
@Directive({
  selector: '[carouselItem]'
})
export class CarouselItemDirective {
  @Input('carouselItem')
  id:string;
  constructor( public tpl : TemplateRef<any> ) {
  }


}
