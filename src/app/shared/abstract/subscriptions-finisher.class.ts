import { Subject } from 'rxjs';
import { CompletableObservable } from './subscription-finisher.type';
import { OnDestroy } from '@angular/core';

/** 
 * @description `default` If the child not use ngOnDestroy() this ngOnDestroy will finish `finishTakeUntil$`
 * in all  the takeUntils which use it;
 * @ If child component use ngOnDestroy then call in these ngOnDestroy `finishSubscriptions()`
 * @property finishTakeUntil$ Use in takeUntil for finish him
 * @method finishSubscriptions pass observables or subscriptions for finish him
 */
export abstract class SubscriptionsFinisher implements OnDestroy {

  /** 
   * @param finishTakeUntil$ Usar para finalizar los takeUntil
   * @description finishTakeUntil$ emitirá un next para finalizar los takeUntil
   * @example this.mySubscription.pipe(takeUntil(this.finishTakeUntil$)).subscribe()
   */
  protected finishTakeUntil$: Subject<string> = new Subject();

  /**
   * @description Por defecto siempre se finaliza finishTakeUntil$
   * @param finishSubsList  Recibe un array de nombres de observables de los que finalizar las suscripciones.
   * @example 
   * public firstSubscription: Observable<any>;
   * private secondSubscription: Subject<any>;
   * ngOnDestroy() { this.finishSubscriptions() };
   * ngOnDestroy() { this.finishSubscriptions(this.firstSubscription, this.secondSubscription) };
   */
  protected finishSubscriptions( ...finishSubsList: CompletableObservable[] ): void {
    this.finishTakeUntil$.next( 'Finish all takeUntil subscriptions' );
    this.finishTakeUntil$.complete();
    finishSubsList.forEach( el => {
      if ( el && el[ 'complete' ] ) { el[ 'complete' ]() };
      if ( el && el[ 'unsubscribe' ] ) { el[ 'unsubscribe' ]() };
    } );
  }

  ngOnDestroy() {
    this.finishSubscriptions();
  }

}
