import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { MoviesComponent } from './movies/movies.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { MovieComponent } from './movie/movie.component';
import { MovieTopComponent } from './movie-top/movie-top.component';
import { InterestComponent } from './interest/interest.component';
import { GenresComponent } from './genres/genres.component';
import { ClassificationsComponent } from './classifications/classifications.component';
import { GetComingComponent } from './get-coming/get-coming.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviePopularComponent,
    MovieTopComponent,
    MovieComponent,
    InterestComponent,
    GenresComponent,
    ClassificationsComponent,
    GetComingComponent,
    NowPlayingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
