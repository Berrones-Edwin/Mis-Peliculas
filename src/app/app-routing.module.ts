import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./components/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "peliculas",
    loadChildren: () =>
      import("./components/movies/movies.module").then((m) => m.MoviesModule),
  },
  {
    path: "series",
    loadChildren: () =>
      import("./components/series/series.module").then((m) => m.SeriesModule),
  },
  {
    path: "info",
    loadChildren: () =>
      import("./components/information/information.module").then(
        (m) => m.InformationModule
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./components/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "buscar",
    loadChildren: () =>
      import("./components/search/search.module").then((m) => m.SearchModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./components/profile/profile.module").then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: "buscar/:termino",
    loadChildren: () =>
      import("./components/search/search.module").then((m) => m.SearchModule),
  },
  {
    path: "actors",
    loadChildren: () =>
      import("./components/actors/actors.module").then((m) => m.ActorsModule),
  },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
