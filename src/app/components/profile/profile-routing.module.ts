import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
  },
  {
    path: "mi-perfil",
    component: ProfileComponent,
  },
  {
    path: "mis-catalogos",
    component: ProfileComponent,
  },
  {
    path: "catalogo/detalles/:id",
    component: ProfileComponent,
  },
  {
    path: "nuevo-catalogo",
    component: ProfileComponent,
  },
  {
    path: "favoritos",
    component: ProfileComponent,
  },
  {
    path: "favoritos/detalles/:id",
    component: ProfileComponent,
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
