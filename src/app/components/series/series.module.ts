import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series/series.component';
import { SharedModule } from '../../shared/components/shared.module';

@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule
  ]
})
export class SeriesModule { }
