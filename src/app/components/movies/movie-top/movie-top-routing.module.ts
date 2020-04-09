import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieTopComponent } from './movie-top.component';


const routes: Routes = [
  { path: '', component: MovieTopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieTopRoutingModule { }
