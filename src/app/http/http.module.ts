import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http.component';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HttpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'',component:HttpComponent}
    ])
  ]
})
export class HttpModule { }
