import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UtilsService } from './shared/services/utils/utils.service';
import { TranslateService } from '@ngx-translate/core';

@Component( {
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AppComponent {

  constructor(
    private us: UtilsService,
    translate: TranslateService
  ) {
    this.us.initObservables();

    translate.addLangs( [ 'es', 'en' ] );
    translate.setDefaultLang( 'en' );

    const browserLang = translate.getBrowserLang();
    translate.use( browserLang.match( /es|en/ ) ? browserLang : 'en' );
  }

}
