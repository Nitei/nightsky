import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
import { TypeGameName } from '../../../../shared/types/type-games-names.type';
import { UtilsService } from '../../../../shared/services/utils/utils.service';
import { TypeGameSymbol } from '../../../../shared/types/type-games-symbols.type';
import { SubscriptionsFinisher } from '../../../../shared/abstract/subscriptions-finisher.class';
import { ChronoStatus } from '../../../../shared/models/chrono.status.model';
import { ChronoStatusTime } from '../../../../shared/models/chrono-status-time.model';
import { ChronoStatusTimeLabelType } from '../../../../shared/types/chrono-status-time-label.type';

@Component( {
  selector: 'ns-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [ './calculadora.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CalculadoraComponent extends SubscriptionsFinisher implements OnInit {

  private readonly stopCheckResult: Subject<void> = new Subject();
  private chrono: number;
  private resultOperation: number;
  readonly gameTypesNames: TypeGameName[] = [ 'suma', 'resta', 'multiplicacion', 'division', ];
  readonly gameTypesSymbols: TypeGameSymbol[] = [ '+', '-', 'x', '/' ];
  chronoList: ChronoStatus[] = [];
  calculadora: FormGroup;
  currentGameType: number;
  howManyNumbers: number = 1;

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

  /**
   * Genera un numero aleatorio
   * @param numDigit Cantidad de numeros modificados por los botones de Nivel -> modifyHowManyNumbers()
   * @return Number
   */
  private generateNumber( numDigit: number ): number {
    return parseInt( ( Math.random() * ( numDigit * 10 ) ).toString() );
  }

  /**
   * Conseguimos numeros validos para el formulario del juego
   * @param howManyNumbers Cantidad de numeros modificados por los botones de Nivel -> modifyHowManyNumbers()
   * @param TypeGameName sumar | restar | multiplicacion | division
   */
  private generateNumbersGame( howManyNumbers, TypeGameName ) {
    const
      firstNumber = this.generateNumber( howManyNumbers ),
      secondNumber = this.generateNumber( howManyNumbers ),
      resultGenerated = this.getFinalResult( TypeGameName, firstNumber, secondNumber ),
      invalidResults = [ Infinity, 0 ]
      ;
    if ( !invalidResults.some( x => x === resultGenerated ) )
      return {
        firstNumber,
        secondNumber,
        resultGenerated
      }
  }

  /**
   * Comprobamos el resultado final con el valor del input
   * @param result Resultado obtenido del metodo getFinalResult()
   */
  private checkResult( result: number ) {
    this.calculadora.get( 'result' ).valueChanges.pipe( takeUntil( this.stopCheckResult ) ).subscribe(
      ( inputValue: string ) => {
        // Si no hay valores en el input no continuamos
        if ( inputValue.length === 0 ) { return }
        // Para poder guardar el valor como resultado ambos tienen que tener al menos la misma cantidad de digitos
        if ( result?.toString().length === inputValue.length ) {
          this.calculadora.get( 'status' ).setValue( result === +inputValue ? true : false );
          this.reset();
        }
      } )
  };

  /**
   * Obtenemos el resultado en  base a el tipo de juego y los operandos antes de inicializar el formulario
   * @param TypeGameName sumar | restar | multiplicacion | division
   * @param firstN Primer operando
   * @param secondN Segundo operando
   * @return Retorna el resultado final de la operacion
   */
  private getFinalResult( TypeGameName: TypeGameName, firstN: number, secondN: number ): number {
    let result: number;
    switch ( TypeGameName ) {
      case 'multiplicacion':
        result = firstN * secondN;
        break;
      case 'division':
        result = parseFloat( ( firstN / secondN ).toFixed( 1 ) );
        break;
      case 'suma':
        result = firstN + secondN;
        break;
      case 'resta':
        result = firstN - secondN;
        break;
      default:
        break;
    }
    this.resultOperation = result;
    return result
  }

  /**
   * Consigue el tiempo en minutos u horas desde el inicio del juego
   */
  getChronoNumber(): ChronoStatusTime {
    const timeMiliSeconds: number = Date.now() - this.chrono ;
    const getMiliseconds = ( miliSeconds ): number | null => {
      const seconds = ( miliSeconds / 1000 ).toString();
      if ( seconds.indexOf( '.' ) != -1 ) {
        return +seconds.slice( seconds.indexOf( '.' ) + 1, seconds.indexOf( '.' ) + 3 )
      } else return null;
    }
    let
      miliSeconds: number = getMiliseconds( timeMiliSeconds ),
      seconds = +( timeMiliSeconds / 1000 ).toFixed( 0 ),
      minits: number = 0,
      hours: number = 0,
      timeLabel: ChronoStatusTimeLabelType = 'seg',
      finalStr: string
      ;
    
    /**
     * Funcion which recibe a param as time in miliseconds then this time willbe reduce
     * dividing
     * @description One object which have the number
     *  right(decimalTime) to point and left(intergerTime)
     * @param time Number which represent time of number interger like 324331230
     * @returns  {intergerTime: 12, decimalTime: 03}
     */
    const getTime = ( time: number)  => {
      let
        intergerTime: number = 0,
        decimalTime: number = time
        ;
      if ( time >= 60 ) {
        while ( decimalTime >= 60 ) {
          decimalTime -= 60;
          intergerTime++;
        }
      }
      if ( intergerTime > 0 ) {
        return {
          intergerTime,
          decimalTime
        }
      }
    }

    // Get numbers
    if ( miliSeconds >= 60 ) {
      const result = getTime( miliSeconds );
      if ( result ) {
        seconds = result.intergerTime;
        miliSeconds = result.decimalTime;
      }
    }
    if ( seconds >= 60 ) {
      const result = getTime( seconds );
      if ( result ) {
        minits = result.intergerTime;
        seconds = result.decimalTime;
      }
    }
    if ( minits >= 60 ) {
      const result = getTime( minits );
      if ( result ) {
        hours = result.intergerTime;
        minits = result.decimalTime;
      }
    }

    // Set time label
    if ( hours > 0 ) {
      timeLabel = "hrs";
      finalStr = `${ hours }.${ minits }`;
    } else if ( minits > 0 ) {
      finalStr = `${ minits }.${ seconds }`;
      timeLabel = "min";
    } else {
      finalStr = `${ seconds }.${ miliSeconds }`;
      timeLabel = "seg";
    }
    return new ChronoStatusTime( +finalStr, timeLabel );
  }

  /**
   * Reset game
   */
  private reset() {
    this.chronoList.unshift( { win: this.formGet( 'status' ), time: this.getChronoNumber(), result: this.resultOperation, election: this.formGet( 'result' ) } );
    this.stopCheckResult.next();
    const timer = setTimeout( () => {
      this.initForm( this.howManyNumbers, this.gameTypesNames[ this.currentGameType ] );
      this.cdr.markForCheck();
      clearTimeout( timer );
    }, 500 );
  };

  /**
   * Inicializa el formulario
   * @param howManyNumbers Cantidad de numeros modificados por los botones de Nivel -> modifyHowManyNumbers()
   * @param TypeGameName sumar | restar | multiplicacion | division
   */
  private initForm( howManyNumbers: number, TypeGameName: TypeGameName ) {
    const numbersForm = this.generateNumbersGame( howManyNumbers, TypeGameName ) ?? this.generateNumbersGame( howManyNumbers, TypeGameName );
    this.calculadora = this.fb.group( {
      firstNumber: numbersForm.firstNumber,
      secondNumber: numbersForm.secondNumber,
      result: null,
      status: this.fb.control( null ),
      TypeGameName: this.fb.control( TypeGameName ),
    } );
    this.chrono = Date.now();
    this.checkResult( numbersForm.resultGenerated );
  };

}
