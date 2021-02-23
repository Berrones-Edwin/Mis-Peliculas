import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRoutingModule } from './information-routing.module';
import { SharedModule } from '../../shared/components/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


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
    InformationRoutingModule,
    ReactiveFormsModule
  ]
})
export class InformationModule { }
