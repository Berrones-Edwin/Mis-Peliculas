import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetComingRoutingModule } from './get-coming-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GetComingComponent } from './get-coming.component';


@NgModule({
  declarations: [
    GetComingComponent
  ],
  imports: [
    CommonModule,
    GetComingRoutingModule,
    SharedModule
  ]
})
export class GetComingModule { }
