import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class SelfDestroy implements OnDestroy {
  selfDestroy$: Subject<boolean> = new Subject();

  ngOnDestroy() {
    this.selfDestroy$.next( true );
    this.selfDestroy$.complete();
  }
}