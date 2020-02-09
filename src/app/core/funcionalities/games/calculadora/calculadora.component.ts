import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Component( {
  selector: 'ns-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [ './calculadora.component.scss' ]
} )
export class CalculadoraComponent implements OnInit, OnDestroy {

  calculadora: FormGroup;
  stopCheckResult: Subject<boolean> = new Subject();


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm();
  }
  ngOnDestroy(): void {
    this.stopCheckResult.next(true);
    this.stopCheckResult.complete();
  }

  generateNumber( numDigit: number = 1 ): number {
    return Number( ( Math.random() * ( numDigit * 10 ) ).toFixed( 0 ) );
  }

  checkResult() {
    this.calculadora.get( 'result' ).valueChanges.pipe(
      takeUntil( this.stopCheckResult )
    ).subscribe( data => {
      if (
        data
        && Number( data ) >= 0
      ) {
        console.log( data );
        if ( (
          this.calculadora.get( 'first' ).value
          * this.calculadora.get( 'second' ).value )
          === Number( this.calculadora.get( 'result' ).value )
        ) {
          this.calculadora.get( 'status' ).setValue( true );
          this.reset();
        } else {
          this.calculadora.get( 'status' ).setValue( false );
        }
      }
    } )
  };

  reset() {
    this.stopCheckResult.next( true );
    setTimeout( () => {
      this.stopCheckResult.next( false );
      this.initForm();
    }, 1000 );
  };

  initForm() {
    this.calculadora = this.fb.group( {
      first: this.fb.control( this.generateNumber() ),
      second: this.fb.control( this.generateNumber() ),
      result: this.fb.control( null ),
      status: this.fb.control( null ),
    } );
    this.checkResult();
  };

}
