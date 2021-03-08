import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogsComponent } from "./catalog/catalogs/catalogs.component";
import { FormCatalogComponent } from "./catalog/form-catalog/form-catalog.component";
import { FavoritesComponent } from "./favorite/favorites/favorites.component";
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
    component: CatalogsComponent,
  },
  {
    path: "catalogo/detalles/:id",
    component: CatalogsComponent,
  },
  {
    path: "nuevo-catalogo",
    component: FormCatalogComponent,
  },
  {
    path: "favoritos",
    component: FavoritesComponent,
  },
  {
    path: "favoritos/detalles/:id",
    component: FavoritesComponent,
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
