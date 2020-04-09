import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NowPlayingRoutingModule } from './now-playing-routing.module';
import { NowPlayingComponent } from './now-playing.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    NowPlayingComponent
  ],
  imports: [
    CommonModule,
    NowPlayingRoutingModule,
    SharedModule
  ]
})
export class NowPlayingModule { }
