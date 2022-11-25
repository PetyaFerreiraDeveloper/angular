import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyRouterLink2]',
})
export class MyRouterLink2Directive implements OnInit, OnDestroy {
  @Input() appMyRouterLink2!: string;
  @Input() template!: TemplateRef<any>;

  unsubs: (() => void)[] = [];
  viewHasBeenCreated = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private vc: ViewContainerRef,
  ) {
    this.unsubs.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseover',
        this.mouseOverHandler
      )
    );
    this.unsubs.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler
      )
    );
    this.unsubs.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'click',
        this.mouseClickHandler
      )
    );
  }
  ngOnInit(): void {
    console.log(this.appMyRouterLink2, this.template);
  }

  mouseClickHandler = (e: MouseEvent) => {
    if (!this.viewHasBeenCreated) {
      this.vc.createEmbeddedView(this.template);
      this.viewHasBeenCreated = true;
    } else {
      this.vc.clear();
      this.viewHasBeenCreated = false;
    }
    console.log(this.appMyRouterLink2);
  };

  mouseOverHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  };

  mouseLeaveHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'initial');
  };

  ngOnDestroy(): void {
    this.unsubs.forEach((fn) => fn());
  }
}
