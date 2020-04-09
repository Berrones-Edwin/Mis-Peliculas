import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificationsRoutingModule } from './classifications-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ClassificationsComponent } from './classifications.component';


@NgModule({
  declarations: [
    ClassificationsComponent
  ],
  imports: [
    CommonModule,
    ClassificationsRoutingModule,
    SharedModule
  ]
})
export class ClassificationsModule { }
