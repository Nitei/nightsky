import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UtilsService } from './shared/services/utils/utils.service';

@Component( {
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AppComponent {

  constructor( private us: UtilsService ) {
    this.us.initObservables();
  }

}
