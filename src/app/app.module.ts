import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { HttpService } from './http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from './http/http.module';

@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
