import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import {routing, appRoutingProviders } from './app.routing';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserListComponent} from './components/user-list/user-list.component';



import {PssnersComponent} from './components/pssner/pssner.component';
import {PssnerlistComponent} from './components/pssner-list/pssner-list.component';

import {ProfileComponent} from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserEditComponent,
    UserListComponent,


      PssnersComponent,
      PssnerlistComponent,
  

      ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    routing,
    HttpClientModule


  ],
  providers: [

  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
