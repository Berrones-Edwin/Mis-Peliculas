import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRoutingModule } from './information-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
