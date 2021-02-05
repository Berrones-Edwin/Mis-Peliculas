import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages/pages.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children:[
      { 
        path: "",
        component : ProfileComponent
      }
    ]
  },
  {
    path: "mi-perfil",
    component: PagesComponent,
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
