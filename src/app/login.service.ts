import { HttpBackend, HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginViewModel } from './login-view-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserName: string = null;
  httpClient: HttpClient;

  constructor(private httpBackend: HttpBackend) { }

  public Login(loginViewModel: LoginViewModel): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);
    
    return this.httpClient.post<any>("/authenticate", loginViewModel, {responseType: "json"})
    .pipe(map (user => {
      if (user) {
        this.currentUserName = user.userName
        sessionStorage.currentUser = JSON.stringify(user);      }
      return user;
    }))
  }

  public Logout() {
    console.log('Top');
    sessionStorage.clear();
    this.currentUserName = null;
    sessionStorage.removeItem("currentUser");
    console.log('clear sessionStorage', sessionStorage);

  }
}
