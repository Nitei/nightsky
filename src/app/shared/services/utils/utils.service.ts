import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { pluck, tap, takeUntil } from 'rxjs/operators';
import { DeviceInfo } from '../../models/device-info.model';
import { SubscriptionsFinisher } from '../../abstract/subscriptions-finisher.class';
import { DeviceInfoType } from '../../types/device-info.type';

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
    const checkWidth = ( x: number ): DeviceInfoType => {
      if ( x > 768 ) return "desktop";
      if ( x <= 768 && x > 425 ) return "tablet";
      if ( x <= 425 ) return "mobile";
    }
    let device: DeviceInfo = new DeviceInfo( checkWidth( window.innerWidth ), window.innerWidth );
    fromEvent( window, 'resize' ).pipe(
      takeUntil( this.finishTakeUntil$ ),
      pluck( 'target', 'innerWidth' ),
      tap<number>( x => {
        device.width = x;
        device.type = checkWidth( x );
        this.deviceType$.next( device );
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