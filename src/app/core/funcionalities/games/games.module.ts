import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';


@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    // ReactiveFormsModule,
    // FormsModule
  ],
  declarations: [
    GamesComponent,
    CalculadoraComponent
  ]
})
export class GamesModule { }
