import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsRoutingModule } from './actors-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    ActorComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    SharedModule
  ]
})
export class ActorsModule { }
