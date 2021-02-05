import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [PagesComponent,ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
