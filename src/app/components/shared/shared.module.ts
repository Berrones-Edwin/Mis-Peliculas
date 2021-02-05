// Modulos
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
// Componentes
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoadingComponent } from "./loading/loading.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GridCardComponent } from "./grid-card/grid-card.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { ErrorComponent } from "./error/error.component";
// Pipes
import { ImagePipe } from "src/app/pipes/image.pipe";
import { Error404Component } from "./error404/error404.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  LoadingComponent,
  NavbarComponent,
  GridCardComponent,
  PaginationComponent,
  MaintenanceComponent,
  ErrorComponent,
  Error404Component,
  SideBarComponent,
];
@NgModule({
  exports: [...COMPONENTS, ImagePipe],
  declarations: [...COMPONENTS, ImagePipe],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
})
export class SharedModule {}
