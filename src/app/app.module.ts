import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesModule } from './core/funcionalities/games/games.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SharedModule } from './shared/shared.module.ts/shared.module';
import { AboutComponent } from './core/funcionalities/about/about.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory( httpClient: HttpClient ) {
  return new TranslateHttpLoader( httpClient, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
  ],
  imports: [
    HttpClientModule,
    GamesModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    TranslateModule.forRoot( {
      extend: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    } )
  ],
  providers: [ SharedModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
