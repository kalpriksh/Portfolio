import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { HomeComponent } from './home/home.component';
import { CompDComponent } from './comp-d/comp-d.component';
import { CompEComponent } from './comp-e/comp-e.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    HomeComponent,
    CompDComponent,
    CompEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
