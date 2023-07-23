import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe({
      next: (result: any) => {
        for(let breakpoint of Object.keys(result.breakpoints)){
          if(result.breakpoints[breakpoint]){
            if(breakpoint === Breakpoints.HandsetPortrait){
              this.renderer.removeClass(this.element.nativeElement, 'pc');
            }
            if(breakpoint === Breakpoints.WebLandscape){
              this.renderer.addClass(this.element.nativeElement, 'pc');
            }
          }
        }
      } 
    });
  }

}
