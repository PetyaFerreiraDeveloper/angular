import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]',
})
export class MyRouterLinkDirective implements OnDestroy {

  
  @HostListener('mouseenter',['$event']) mouseEnterHandler(e: MouseEvent) {
    console.log('mouse enter', e);
  }
  // THis is the same as to put in element in the template the following:
  // (mouseenter)="mouseEnterHandler($event)"

  @HostListener('mouseleave') mouseleaveHandler2() {
    console.log('mouse leave');
  }
  unsubs: (() => void)[] = [];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.unsubs.push(this.renderer.listen(
      this.elementRef.nativeElement,
      'mouseover',
      this.mouseOverHandler
    ));
    this.unsubs.push(this.renderer.listen(
    this.elementRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler
    ));
   
    // this.renderer.setAttribute(this.elementRef.nativeElement, 'data-test', '123');
  }

  mouseOverHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  };

  mouseLeaveHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'initial');
  }

  ngOnDestroy(): void {
    this.unsubs.forEach(fn => fn());
  }
}
