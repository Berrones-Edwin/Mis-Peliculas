import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: 'acerca', component: AboutComponent },
    { path: 'contacto', component: ContactComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'acerca' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformationRoutingModule { }
