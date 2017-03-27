import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UsersSectionComponent} from "../users-section/users-section.component";
import {UsersFormComponent} from "../users-section/users-form/users-form.component";
import {UserDetailsComponent} from "../users-section/user-details/user-details.component";
import {GroupsSectionComponent} from "../groups-section/groups-section.component";
import { UsersService } from "../users-section/users.service";
import { SimpsonNameDirective } from '../shared/simpson-name.directive';
import { AuthGuardService } from "../auth/auth-guard.service";
import { SearchComponent } from '../shared/search/search.component';
import {CustomCardComponent} from "../custom-card/custom-card.component";
import { MaterialModule } from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import {AuthService} from "../auth/auth.service";
import {CustomHttpService} from "../shared/network/custom-http.service";

const routes: Routes = [
  { path: 'users', component: UsersSectionComponent  },
  { path: 'users/form', component: UsersFormComponent},
  { path: 'user/:id', component: UserDetailsComponent, data: {title: 'hello'}},
  { path: 'groups', component: GroupsSectionComponent }
]

@NgModule({
  declarations: [
    UsersSectionComponent,
    GroupsSectionComponent,
    UsersFormComponent,
    UserDetailsComponent,
    SimpsonNameDirective,
    SearchComponent,
    CustomCardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    Angular2FontAwesomeModule,
  ],
  providers: [
    UsersService,
    AuthGuardService,
    AuthService,
    CustomHttpService
  ],
  exports: [
    RouterModule
  ]
})
export class AdminLayoutModule { }
