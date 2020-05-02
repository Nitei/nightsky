import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators'
import { Subject, interval } from 'rxjs';
import { TypeGameName } from '../../../../shared/types/type-games-names.type';
import { UtilsService } from '../../../../shared/services/utils/utils.service';
import { TypeGameSymbol } from '../../../../shared/types/type-games-symbols.type';
import { SubscriptionsFinisher } from '../../../../shared/abstract/subscriptions-finisher.class';
import { ChronoStatus } from '../../../../shared/models/chrono.status.model';

@Component( {
  selector: 'ns-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [ './calculadora.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CalculadoraComponent extends SubscriptionsFinisher implements OnInit, OnDestroy {

  readonly gameTypesNames: TypeGameName[] = [ 'suma', 'resta', 'multiplicacion', 'division', ];
  readonly gameTypesSymbols: TypeGameSymbol[] = [ '+', '-', 'x', '/' ];
  private stopCheckResult: Subject<boolean> = new Subject();
  chrono: number;
  chronoList: ChronoStatus[] = [];
  calculadora: FormGroup;
  currentGameType: number;
  howManyNumbers: number = 1;
  resultOperation: number;
  showBtn = true;

  constructor(
    private fb: FormBuilder,
    private us: UtilsService,
    private cdr: ChangeDetectorRef
  ) { super() }

  ngOnInit(): void {
    this.currentGameType = 3;
    this.initGame( 'suma' );
  }

  ngOnDestroy(): void {
    this.stopCheckResult.next( true );
    this.finishSubscriptions( this.stopCheckResult );
  }

  capitalize( text: string ): string {
    return this.us.capitalizeText( text );
  }

  formGet( propName: string ) {
    return this.calculadora.get( propName ).value;
  }

  modifyHowManyNumbers( ev: '+' | '-' ) {
    if ( ev === '-' && this.howManyNumbers > 1 ) {
      this.howManyNumbers--;
    } else if ( ev === '+' ) {
      this.howManyNumbers++;
    }
    this.initForm( this.howManyNumbers, this.gameTypesNames[ this.currentGameType ] );
  }

  initGame( game: TypeGameName ) {
    this.currentGameType = this.gameTypesNames.findIndex( el => el === game );
    this.initForm( this.howManyNumbers, game );
  };

  private generateNumber( numDigit: number ): number {
    return parseFloat( ( Math.random() * ( numDigit * 10 ) ).toFixed( 0 ) );
  }

  private checkResult( result: number ) {
    this.calculadora.get( 'result' ).valueChanges.pipe( takeUntil( this.stopCheckResult ) ).subscribe(
      ( data: string ) => {
        if ( !data ) { return }
        const resultLength = data.length > 0 ? data.length : this.reset(true);
        if ( result ) {
          if ( result.toString().length === resultLength ) {
            if ( result === parseFloat( this.formGet( 'result' ) ) ) {
              this.calculadora.get( 'status' ).setValue( true );
            } else {
              this.calculadora.get( 'status' ).setValue( false );
            }
            this.reset(true);
          }
        }
      } )
  };

  private getResult( TypeGameName: TypeGameName, firstN: string, secondN: string ): any {
    let
      firstNumber: number = parseFloat( firstN ),
      secondNumber: number = parseFloat( secondN ),
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
    if ( result === Infinity
      || result === 0 ) { 
      this.reset(true);
    } else {
      this.resultOperation = result;
      return result
    }
  }

  getChronoNumber(): number {
    const
      chronoInit = this.chrono / 1000,
      subtrac = +( Date.now() / 1000 - chronoInit ).toFixed( 2 )
      ;
    if ( subtrac > 60 ) {
      return subtrac / 60
    } else if ( subtrac > 3600 ) {
      return subtrac / 3600
    } else {
      return subtrac
    }
  }

  /**
   * @param invalidResult if result is invalid reset game fast
   */
  private reset( invalidResult?: boolean ) {
    if (!invalidResult) { 
      this.chronoList.unshift( { win: this.formGet( 'status' ), time: this.getChronoNumber(), result: this.resultOperation, election: this.formGet('result') } );
      this.stopCheckResult.next(true);
    }
    const timer = setTimeout( () => {
      this.stopCheckResult.next(false);
      this.initForm( this.howManyNumbers, this.gameTypesNames[ this.currentGameType ] );
      this.cdr.markForCheck();
      clearTimeout( timer );
    }, invalidResult ? 0 : 500 );
  };

  private initForm( howManyNumbers: number, TypeGameName: TypeGameName ) {
    this.calculadora = this.fb.group( {
      firstNumber: this.fb.control( this.generateNumber( howManyNumbers ) ),
      secondNumber: this.fb.control( this.generateNumber( howManyNumbers ) ),
      result: null,
      status: this.fb.control( null ),
      TypeGameName: this.fb.control( TypeGameName ),
    } );

    this.chrono = Date.now();

    this.checkResult(
      this.getResult(
        this.formGet( 'TypeGameName' ),
        this.formGet( 'firstNumber' ),
        this.formGet( 'secondNumber' ) )
    );
  };

}
