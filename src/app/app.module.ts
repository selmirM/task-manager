import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing-module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
