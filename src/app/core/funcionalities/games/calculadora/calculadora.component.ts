import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
import { TypeGame } from '../../../../shared/types/type-games.type';
import { UtilsService } from '../../../../shared/services/utils.service';

@Component( {
  selector: 'ns-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [ './calculadora.component.scss' ]
} )
export class CalculadoraComponent implements OnInit, OnDestroy {

  calculadora: FormGroup;
  gameTypes: TypeGame[] = [ 'suma', 'resta', 'multiplicacion', 'division' ];
  currentGameType: number;
  stopCheckResult: Subject<boolean> = new Subject();

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
  ) { }

  ngOnInit(): void {
    this.currentGameType = 3;
    this.initGame();
  }
  
  initGame() {
    this.currentGameType === 3 ? this.currentGameType = 0 : this.currentGameType++;
    this.initForm( 2, this.gameTypes[ this.currentGameType ] );
  };

  ngOnDestroy(): void {
    this.stopCheckResult.next( true );
    this.stopCheckResult.complete();
  }

  private generateNumber( numDigit: number ): number {
    return Number( ( Math.random() * ( numDigit * 10 ) ).toFixed( 0 ) );
  }

  private checkResult( result: number ) {
    this.calculadora.get( 'result' ).valueChanges.pipe(
      takeUntil( this.stopCheckResult )
    ).subscribe( data => {
      console.log(data)
      const resultLength = data.toString().length > 0 ? data.toString().length : this.reset();
      console.log( result )
      if ( result ) {
        if ( result && Number( result ) > 0 ) {
          if ( result.toString().length === resultLength ) {
            if ( result === Number( this.formGet( 'result' ) ) ) {
              this.calculadora.get( 'status' ).setValue( true );
              this.reset();;
            } else {
              this.calculadora.get( 'status' ).setValue( false );
              this.reset();;
            }
          }
        }
      }

    } )
  };

  private getResult( typeGame: TypeGame, firstN: number, secondN: number ): any {
    if ( typeGame && isNaN(firstN) && isNaN(secondN) ) {
    const
    first = Number( firstN ),
      second = Number( secondN );
      if (first && second) {
      let result: number;
      switch ( typeGame ) {
        case 'multiplicacion':
          result = first * second;
          break;
        case 'division':
          result = Number( ( first / second ).toFixed( 1 ) );
          break;
        case 'suma':
          result = first + second;
          break;
        case 'resta':
          result = first - second;
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
    } else {

    }
  }

  private formGet( propName: string ) {
    return this.calculadora.get( propName ).value;
  }

  private reset() {
    this.stopCheckResult.next( true );
    const timer = setTimeout( () => {
      this.stopCheckResult.next( false );
      this.initForm(1, 'suma');
      clearTimeout( timer );
    }, 500 );
  };

  private initForm( howManyNumbers: number, typeGame: TypeGame ) {
    this.calculadora = this.fb.group( {
      first: this.fb.control( this.generateNumber( howManyNumbers ) ),
      second: this.fb.control( this.generateNumber( howManyNumbers ) ),
      result: this.fb.control( null ),
      status: this.fb.control( null ),
      typeGame: this.fb.control( typeGame ),
    } );

    this.checkResult(
      this.getResult(
        this.formGet( 'typeGame' ),
        this.formGet( 'first' ),
        this.formGet( 'second' ) )
    );
  };

}
