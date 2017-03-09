import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { UsersSectionComponent } from './users-section/users-section.component';
import { GroupsSectionComponent } from './groups-section/groups-section.component';
import { UsersFormComponent } from './users-section/users-form/users-form.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './users-section/user-details/user-details.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { UsersService } from "./users-section/users.service";
import { SimpsonNameDirective } from './shared/simpson-name.directive';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AdminLayoutComponent, children: [
    { path: 'users', component: UsersSectionComponent  },
    { path: 'users/form', component: UsersFormComponent},
    { path: 'user/:id', component: UserDetailsComponent, data: {title: 'hello'}},
    { path: 'groups', component: GroupsSectionComponent }
  ]},
  { path: '**', redirectTo: '/login'}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomCardComponent,
    UsersSectionComponent,
    GroupsSectionComponent,
    UsersFormComponent,
    LoginComponent,
    UserDetailsComponent,
    AdminLayoutComponent,
    SimpsonNameDirective
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
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
