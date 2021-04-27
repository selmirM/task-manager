import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import {AppRoutingModule} from './app-routing-module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import {HttpClientModule, HttpResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { JwtUnAuthorizedInterceptorService } from './services/jwt-un-authorized-interceptor.service';
import { TeamSizeValidatorDirective } from './team-size-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeamSizeValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    JwtModule.forRoot({
      // config JWT module
      config: {
        tokenGetter: () => {
          return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null)
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HttpResponse,
      useClass: JwtUnAuthorizedInterceptorService,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
