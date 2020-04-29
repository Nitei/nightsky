import { Subject } from 'rxjs';

/** 
 * Use in ngOndestroy for finish subscriptions like takeUntil
 */
export abstract class SubscriptionsFinisher {

  /** 
   * @param finishOnDestroy$ Usar para finalizar los takeUntil
   * @description finishOnDestroy$ emitirá un next para finalizar los takeUntil
   * @example this.mySubscription.pipe(takeUntil(this.finishOnDestroy$)).subscribe()
   */
  protected finishOnDestroy$: Subject<string> = new Subject();

  /**
   * @description Por defecto siempre se finaliza finishOnDestroy$
   * @param finishSubsList  Recibe un array de nombres de observables de los que finalizar las suscripciones.
   * @example 
   * public firstSubscription: Observable<any>;
   * private secondSubscription: Subject<any>;
   * ngOnDestroy() { this.finishOnDestroySubs() };
   * ngOnDestroy() { this.finishOnDestroySubs(['firstSubscription', 'secondSubscription']) };
   */
  protected finishOnDestroySubs( finishSubsList: string[] = [] ): void {
    this.finishOnDestroy$.next( 'Finish all takeUntil subscriptions' );
    finishSubsList.unshift( 'finishOnDestroy$' );
    finishSubsList.forEach( el => {
      if ( this[ el ] && this[ el ].complete ) { this[ el ].complete() };
    } );
  }

}
