import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import {AuthService} from "./auth/auth.service";
import {CustomHttpService} from "./shared/network/custom-http.service";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AdminLayoutComponent, loadChildren:'./admin-layout/admin-layout.module#AdminLayoutModule'},
  { path: '**', redirectTo: '/login'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    CustomHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
