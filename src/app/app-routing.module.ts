import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { HttpModule } from './http/http.module';
const routes: Routes = [
  {path: '', loadChildren: 'app/http/http.module#HttpModule'}
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

//export class AppRoutingModule { }
