import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';
import { EmployeedDetailFormComponent } from './employeed-detail-form/employeed-detail-form.component';
import { LeaveComponent } from './leave/leave.component';
import { ApprasialComponent } from './apprasial/apprasial.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ContactComponent,
    EventComponent,
    EmployeedDetailFormComponent,
    LeaveComponent,
    ApprasialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
