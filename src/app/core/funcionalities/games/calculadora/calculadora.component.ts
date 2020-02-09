import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
import { TypeGame } from '../../../../shared/types/type-games.type';

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
    this.stopCheckResult.next( true );
    this.stopCheckResult.complete();
  }

  private generateNumber( numDigit: number ): number {
    return Number( ( Math.random() * ( numDigit * 10 ) ).toFixed( 0 ) );
  }

  private checkResult() {
    this.calculadora.get( 'result' ).valueChanges.pipe(
      takeUntil( this.stopCheckResult )
    ).subscribe( data => {
      if ( data && Number( data ) != NaN ) {
        const result = this.getResult(
          this.formGet( 'typeGame' ),
          this.formGet( 'first' ),
          this.formGet( 'second' ) );
        console.log( result )
        if ( data.length === result.toString().length ) {
          if ( result === Number( this.formGet( 'result' ) ) ) {
            this.calculadora.get( 'status' ).setValue( true );
            this.reset();
          } else {
            this.calculadora.get( 'status' ).setValue( false );
            this.reset();
          }
        }
      }
    } )
  };

  private getResult( typeGame: TypeGame, firstN: number, secondN: number ) {
    if ( typeGame && firstN && secondN ) {
      const
        first = Number( firstN ),
        second = Number( secondN );
      switch ( typeGame ) {
        case 'multiplicacion':
          return first * second;
        case 'division':
          return Number( ( first / second ).toFixed( 1 ) );
        case 'suma':
          return first + second;
        case 'resta':
          return first - second;
        default:
          break;
      }
    }
  }

  private formGet( propName: string ) {
    return this.calculadora.get( propName ).value;
  }

  private reset() {
    this.stopCheckResult.next( true );
    const timer = setTimeout( () => {
      this.stopCheckResult.next( false );
      this.initForm();
      clearTimeout( timer );
    }, 500 );
  };

  private initForm( howManyNumbers: number = 1 ) {
    this.calculadora = this.fb.group( {
      first: this.fb.control( this.generateNumber( howManyNumbers ) ),
      second: this.fb.control( this.generateNumber( howManyNumbers ) ),
      result: this.fb.control( null ),
      status: this.fb.control( null ),
      typeGame: this.fb.control( 'division' ),
    } );

    this.checkResult();
  };

}
