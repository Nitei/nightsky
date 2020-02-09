import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'games', loadChildren: () => import( './core/funcionalities/games/games.module' ).then( m => m.GamesModule ),
  },
  {
    path:'', redirectTo: 'games', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
