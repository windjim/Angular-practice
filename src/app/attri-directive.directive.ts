import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttriDirective]'
})
export class AttriDirectiveDirective {
  constructor(private el:ElementRef) { }
  @Input('appAttriDirective') highlightColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'green');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
