import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: 'mi-perfil', component: ProfileComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'mi-perfil' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
