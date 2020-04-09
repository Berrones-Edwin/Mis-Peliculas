import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviePopularComponent } from './movie-popular.component';


const routes: Routes = [
  { path:'',component:MoviePopularComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePopularRoutingModule { }
