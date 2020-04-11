import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Directiva que solo permite le uso de numeros, bacspace y el punto
 */

@Directive( {
  selector: '[nsOnlyNumber]'
} )
export class OnlyNumberDirective {

  @Input('nsOnlyNumber') withDecimals: boolean;
  private allowKeys = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ArrowLeft', 'ArrowRight', 'Backspace', 'Delete' ]

  constructor( private el: ElementRef ) { }

  @HostListener( 'keydown', [ '$event' ] )
  allowIfNumber( ev: KeyboardEvent ) {
    if ( this.el.nativeElement === ev.target ) {
      if ( this.withDecimals ) {
        this.allowKeys.push( ',', '.' )
      }
      if ( this.allowKeys.some( el => el === ev.key ) === false ) {
        ev.preventDefault();
      }
    }
  }

}
