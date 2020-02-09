import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';


@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
  ],
  exports: [
  ],
  declarations: [
    GamesComponent
  ]
})
export class GamesModule { }
