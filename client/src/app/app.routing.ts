import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//componentes

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {UserListComponent} from './components/user-list/user-list.component';

import {PssnersComponent } from './components/pssner/pssner.component';
import {PssnerlistComponent} from './components/pssner-list/pssner-list.component';
import {ProfileComponent} from './components/profile/profile.component';

const appRoutes: Routes = [

{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegisterComponent},
{path: 'mis-datos', component: UserEditComponent},

{path: 'user-list/:page', component: UserListComponent},
{path: 'user-list', component: UserListComponent},
{path: 'pssner', component: PssnersComponent},
{path: 'pssner-list', component: PssnerlistComponent},
{path: 'perfil/:id', component: ProfileComponent},

{path: '**', component: HomeComponent}


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
