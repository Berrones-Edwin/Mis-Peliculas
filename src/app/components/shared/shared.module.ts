// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Componentes
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
// Pipes
import { ImagePipe } from 'src/app/pipes/image.pipe';
import { GridCardComponent } from './grid-card/grid-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  exports:[
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    NavbarComponent,
    ImagePipe,
    SideBarComponent,
    GridCardComponent,
    PaginationComponent,
    MaintenanceComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    NavbarComponent,
    ImagePipe,
    SideBarComponent,
    GridCardComponent,
    PaginationComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
