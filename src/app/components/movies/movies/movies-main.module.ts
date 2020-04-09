import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MoviesComponent } from './movies.component';
import { MoviesMainRoutingModule } from './movies-main-routing.module';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesMainRoutingModule,
    SharedModule
  ]
})
export class MoviesMainModule { }
