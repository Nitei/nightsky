import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/funcionalities/about/about.component';

const routes: Routes = [
  {
    path: 'games', loadChildren: () => import( './core/funcionalities/games/games.module' ).then( m => m.GamesModule ),
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: '', redirectTo: 'about', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'about'
  }
];

@NgModule( {
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
