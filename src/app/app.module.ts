import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AaaComponent } from './routr/aaa/aaa.component';
import { BbbComponent } from './routr/bbb/bbb.component';
import { DataComponent } from './routr/data/data.component';
import { UsersComponent } from './routr/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AaaComponent,
    BbbComponent,
    DataComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
