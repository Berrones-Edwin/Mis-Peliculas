import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SeriesComponent } from './series/series.component';


const routes:Routes=[
    { path: '',component: SeriesComponent },
    // { path: 'popular-semana/:id',component: MoviePopularComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
