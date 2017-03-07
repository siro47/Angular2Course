import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { UsersSectionComponent } from './users-section/users-section.component';
import { GroupsSectionComponent } from './groups-section/groups-section.component';
import { UsersFormComponent } from './users-section/users-form/users-form.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersSectionComponent },
  { path: 'groups', component: GroupsSectionComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomCardComponent,
    UsersSectionComponent,
    GroupsSectionComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
