import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviePopularRoutingModule } from './movie-popular-routing.module';
import { MoviePopularComponent } from './movie-popular.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MoviePopularComponent
  ],
  imports: [
    CommonModule,
    MoviePopularRoutingModule,
    SharedModule
  ]
})
export class MoviePopularModule { }
