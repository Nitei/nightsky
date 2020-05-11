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
    private translate: TranslateService
  ) {
    this.us.initObservables();

    this.translate.addLangs( [ 'es', 'en' ] );

    const browserLang = translate.getBrowserLang();
    this.translate.use( browserLang.match( /es|en/ ) ? browserLang : 'en' );
  }

}
