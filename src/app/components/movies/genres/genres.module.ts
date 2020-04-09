import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GenresComponent } from './genres.component';


@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    SharedModule
  ]
})
export class GenresModule { }
