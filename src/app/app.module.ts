import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesModule } from './core/funcionalities/games/games.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SharedModule } from './shared/shared.module.ts/shared.module';
import { AboutComponent } from './core/funcionalities/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    GamesModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
