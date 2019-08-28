// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Shared Module
import { SharedModule } from './components/shared/shared.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
