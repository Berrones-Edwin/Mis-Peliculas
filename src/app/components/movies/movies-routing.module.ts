import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./movies/movies-main.module').then(m=> m.MoviesMainModule) },

  { path: 'top/:id', loadChildren: () => import('./movie-top/movie-top.module').then(m => m.MovieTopModule) },

  { path: 'popular/:id', loadChildren: () => import('./movie-popular/movie-popular.module').then(m => m.MoviePopularModule) },

  { path: 'ahora-cines/:id', loadChildren: () => import('./now-playing/now-playing.module').then(m => m.NowPlayingModule) },

  { path: 'proximo-estrenar/:id', loadChildren: () => import('./get-coming/get-coming.module').then(m => m.GetComingModule) },
  { path: 'generos', loadChildren: () => import('./genres/genres.module').then(m => m.GenresModule) },
  { path: 'generos/:genre/:page', loadChildren: () => import('./genres/genres.module').then(m => m.GenresModule) },
  { path: 'clasificaciones', loadChildren: () => import('./classifications/classifications.module').then(m => m.ClassificationsModule) },
  // { path: 'clasificaciones/:opcion', component: ClassificationsComponent },
  { path: 'clasificaciones/:opcion/:page', loadChildren: () => import('./classifications/classifications.module').then(m => m.ClassificationsModule) },

  { path: ':id', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
