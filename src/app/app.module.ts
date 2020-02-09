import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesModule } from './core/funcionalities/games/games.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GamesRoutingModule } from './core/funcionalities/games/games-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GamesModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
