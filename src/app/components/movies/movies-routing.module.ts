import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MoviesComponent } from './movies/movies.component';

import { MovieComponent } from './movie/movie.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { MovieTopComponent } from './movie-top/movie-top.component';
import { InterestComponent } from './interest/interest.component';
import { GenresComponent } from './genres/genres.component';
import { ClassificationsComponent } from './classifications/classifications.component';



const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'top/:id', component: MovieTopComponent },
  { path: 'popular/:id', component: MoviePopularComponent },
  { path: 'generos', component: GenresComponent },
  { path: 'generos/:genre/:page', component: GenresComponent },
  { path: 'clasificaciones', component: ClassificationsComponent },
  { path: 'clasificaciones/:opcion', component: ClassificationsComponent },
  { path:'interesar/:opcion/:page',component:InterestComponent },
  { path: ':id', component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
