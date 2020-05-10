import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  {
    path: 'games', component: GamesComponent,
    children: [
      {
        path: 'calculadora', component: CalculadoraComponent
      },
      {
        path: '**', redirectTo: 'calculadora', pathMatch: 'full'
      }
    ]
  },
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class GamesRoutingModule { }
