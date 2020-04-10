import { NgModule } from '@angular/core';

// Components
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClassificationsComponent } from './classifications/classifications.component';
import { GenresComponent } from './genres/genres.component';
import { GetComingComponent } from './get-coming/get-coming.component';
import { MovieComponent } from './movie/movie.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { MovieTopComponent } from './movie-top/movie-top.component';
import { MoviesComponent } from './movies/movies.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';


@NgModule({
  declarations: [
    ClassificationsComponent,
    GenresComponent,
    GetComingComponent,
    MovieComponent,
    MoviePopularComponent,
    MovieTopComponent,
    MoviesComponent,
    NowPlayingComponent
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
