import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'inicio', component: HomeComponent },

  { path: 'peliculas', loadChildren: './components/movies/movies.module#MoviesModule', },
  { path: 'series', loadChildren: './components/series/series.module#SeriesModule' },
  { path: 'info', loadChildren: './components/information/information.module#InformationModule' },
  { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' },

  { path: 'buscar', component: SearchComponent },
  { path: 'buscar/:termino', component: SearchComponent },

  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
