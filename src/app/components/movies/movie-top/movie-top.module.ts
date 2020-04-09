import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieTopRoutingModule } from './movie-top-routing.module';
import { MovieTopComponent } from './movie-top.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MovieTopComponent
  ],
  imports: [
    CommonModule,
    MovieTopRoutingModule,
    SharedModule
    
  ]
})
export class MovieTopModule { }
