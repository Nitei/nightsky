import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SharedModule } from '../../../shared/shared.module.ts/shared.module';


@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
  ],
  declarations: [
    GamesComponent,
    CalculadoraComponent,
  ]
})
export class GamesModule { }
