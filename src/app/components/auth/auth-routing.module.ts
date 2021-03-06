import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile/profile.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'inicio-sesion', component: LoginComponent, },
    { path: 'registro', component: RegisterComponent, },
    // { path: 'mi-perfil', component: ProfileComponent, canLoad: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio-sesion' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
