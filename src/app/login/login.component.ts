import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = "";


  constructor(private loginSvc: LoginService, private router: Router) {}

  ngOnInit(): void {
  }

    onLoginClick(event) {
      this.loginSvc.Login(this.loginViewModel).subscribe(
        (response)=> {
          this.router.navigateByUrl("/dashboard");
        },
        (error)=>{
          console.log(error);
          this.loginError = "Invalid Username or Password";
        }
      )
    }
}
