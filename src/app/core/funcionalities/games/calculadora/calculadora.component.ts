import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
import { TypeGameName } from '../../../../shared/types/type-games-names.type';
import { UtilsService } from '../../../../shared/services/utils.service';
import { TypeGameSymbol } from '../../../../shared/types/type-games-symbols.type';

@Component( {
  selector: 'ns-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [ './calculadora.component.scss' ]
} )
export class CalculadoraComponent implements OnInit, OnDestroy {

  calculadora: FormGroup;
  gameTypesNames: TypeGameName[] = [ 'suma', 'resta', 'multiplicacion', 'division' ];
  gameTypesSymbols: TypeGameSymbol[] = [ '+', '-', 'x', '/' ];
  currentGameType: number;
  stopCheckResult: Subject<boolean> = new Subject();

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
  ) { }

  ngOnInit(): void {
    this.currentGameType = 3;
    this.initGame( 'suma' );
  }

  capitalize(text: string): string {
    return this.utils.capitalizeText( text );
  }

  initGame(game: TypeGameName) {
    this.initForm( 2, game );
  };

  ngOnDestroy(): void {
    this.stopCheckResult.next( true );
    this.stopCheckResult.complete();
  }

  private generateNumber( numDigit: number ): number {

    return parseFloat( ( Math.random() * ( numDigit * 10 ) ).toFixed( 0 ) );
  }

  private checkResult( result: number ) {
    this.calculadora.get( 'result' ).valueChanges.pipe(
      takeUntil( this.stopCheckResult )
    ).subscribe( data => {
      if ( !data ) { return }
      const resultLength = data.toString().length > 0 ? data.toString().length : this.reset();
      if ( result ) {
        if ( result.toString().length === resultLength ) {
          if ( result === parseFloat( this.formGet( 'result' ) ) ) {
            this.calculadora.get( 'status' ).setValue( true );
          } else {
            this.calculadora.get( 'status' ).setValue( false );
          }
          this.reset();
        }
      }
    } )
  };

  private getResult( TypeGameName: TypeGameName, firstN: string, secondN: string ): any {
    let
      firstNumber: number = parseFloat(firstN),
      secondNumber: number = parseFloat(secondN),
      result: number;
    switch ( TypeGameName ) {
      case 'multiplicacion':
        result = firstNumber * secondNumber;
        break;
      case 'division':
        result = parseFloat( ( firstNumber / secondNumber ).toFixed( 1 ) );
        break;
      case 'suma':
        result = firstNumber + secondNumber;
        break;
      case 'resta':
        result = firstNumber - secondNumber;
        break;
      default:
        break;
    }
    if ( result && ( result > 0 || result < 0 ) && result != null ) {
      return result
    } else {
      this.reset();
    };
  }

  private formGet( propName: string ) {
    return this.calculadora.get( propName ).value;
  }

  private reset() {
    this.stopCheckResult.next( true );
    const timer = setTimeout( () => {
      this.stopCheckResult.next( false );
      this.initForm( 1, 'suma' );
      clearTimeout( timer );
    }, 500 );
  };

  private initForm( howManyNumbers: number, TypeGameName: TypeGameName ) {
    this.calculadora = this.fb.group( {
      firstNumber: this.fb.control( this.generateNumber( howManyNumbers ) ),
      secondNumber: this.fb.control( this.generateNumber( howManyNumbers ) ),
      result: '',
      status: this.fb.control( null ),
      TypeGameName: this.fb.control( TypeGameName ),
    } );

    this.checkResult(
      this.getResult(
        this.formGet( 'TypeGameName' ),
        this.formGet( 'firstNumber' ),
        this.formGet( 'secondNumber' ) )
    );
  };

}
