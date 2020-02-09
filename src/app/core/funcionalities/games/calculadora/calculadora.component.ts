import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Component( {
  selector: 'ns-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [ './calculadora.component.scss' ]
} )
export class CalculadoraComponent implements OnInit {

  calculadora: FormGroup;
  stopCheckResult: Subject<boolean> = new Subject();


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm();
  }

  generateNumber( numDigit: number = 1 ): number {
    return Number( ( Math.random() * ( numDigit * 10 ) ).toFixed( 0 ) );
  }

  checkResult() {
    this.calculadora.get( 'result' ).valueChanges.pipe(
      takeUntil( this.stopCheckResult )
    ).subscribe( data => {
      if ( data ) {
        console.log( data );
        if ( (
          parseInt( this.calculadora.get( 'first' ).value )
          * parseInt( this.calculadora.get( 'second' ).value ) )
          === parseInt( this.calculadora.get( 'result' ).value )
        ) {
          this.calculadora.get( 'win' ).setValue( true );
          this.stopCheckResult.next( true );
          this.stopCheckResult.complete();
        } else {
          this.calculadora.get( 'win' ).setValue( null );
        }

        console.log( this.calculadora.controls );
      }
    } )
  };

  initObsForm() {
  };

  initForm() {
    this.calculadora = this.fb.group( {
      first: this.fb.control( this.generateNumber() ),
      second: this.fb.control( this.generateNumber() ),
      result: this.fb.control( null ),
      win: this.fb.control( false ),
    } );
    this.initObsForm();
    this.checkResult();
  };

}
