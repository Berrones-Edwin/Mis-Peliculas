import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComingComponent } from './get-coming.component';


const routes: Routes = [
  { path:'',component:GetComingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetComingRoutingModule { }
