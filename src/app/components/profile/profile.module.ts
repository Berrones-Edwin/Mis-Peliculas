import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/components/shared.module';

import { CatalogsComponent } from './catalog/catalogs/catalogs.component';
import { FormCatalogComponent } from './catalog/form-catalog/form-catalog.component';
import { GridCatalogComponent } from './catalog/grid-catalog/grid-catalog.component';
import { CardCatalogComponent } from './catalog/card-catalog/card-catalog.component';

import { FavoritesComponent } from './favorite/favorites/favorites.component';
import { GridFavoritesComponent } from './favorite/grid-favorites/grid-favorites.component';
import { CardFavoritesComponent } from './favorite/card-favorites/card-favorites.component';
import { DetailCatalogComponent } from './catalog/detail-catalog/detail-catalog.component';

const COMPONENTS = [
  ProfileComponent,
  CatalogsComponent,
  FormCatalogComponent,
  GridCatalogComponent,
  CardCatalogComponent,
  FavoritesComponent,
  GridFavoritesComponent,
  CardFavoritesComponent,
];

@NgModule({
  declarations: [...COMPONENTS, DetailCatalogComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
})
export class ProfileModule {}
