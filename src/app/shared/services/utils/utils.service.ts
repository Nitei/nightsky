import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { pluck, tap, takeUntil } from 'rxjs/operators';
import { DeviceInfo } from '../../models/device-info.model';
import { SubscriptionsFinisher } from '../../abstract/subscriptions-finisher.class';

@Injectable( {
  providedIn: 'root'
} )
export class UtilsService extends SubscriptionsFinisher {

  deviceType$: Subject<DeviceInfo> = new Subject();

  constructor() {
    super()
  }

  initObservables() {
    this.getWindowSize();
  }

  getWindowSize() {
    let device: DeviceInfo = new DeviceInfo();
    fromEvent( window, 'resize' ).pipe(
      takeUntil( this.finishTakeUntil$ ),
      pluck( 'target', 'innerWidth' ),
      tap<number>( x => {
        console.log(x)
        device.width = x;
        switch ( true ) {
          case x > 768:
            device.type = "desktop";
            break;
          case x <= 768 && x > 425:
            device.type = "tablet";
            break;
          case x <= 425:
            device.type = "mobile";
            break;
          default:
            break;
        }
        this.deviceType$.next( device );
        console.log( device.type )
      } )
    ).subscribe()
  }

  capitalizeText( text: string ) {
    let lowercased = text.toLowerCase();
    return lowercased.replace( lowercased[ 0 ], lowercased[ 0 ].toUpperCase() );
  }

  checkIsNumber( ev: string | number ) {
    return ev >= 0 && ev > 10 ? ev : 0;
  }

}