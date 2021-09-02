// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
// Componentes
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridCardComponent } from './grid-card/grid-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ErrorComponent } from './error/error.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderSectionComponent } from './header-section/header-section.component';

// Pipes
import { ImagePipe } from 'src/app/shared/pipes/image.pipe';
import { ApiRestPipe } from 'src/app/shared/pipes/image-api.pipe';


const COMPONENTS = [
  HeaderComponent,
  LoadingComponent,
  NavbarComponent,
  GridCardComponent,
  PaginationComponent,
  ErrorComponent,
  SideBarComponent,
  HeaderSectionComponent
];
@NgModule({
  exports: [...COMPONENTS, ImagePipe,ApiRestPipe],
  declarations: [...COMPONENTS, ImagePipe,ApiRestPipe],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
})
export class SharedModule {}
