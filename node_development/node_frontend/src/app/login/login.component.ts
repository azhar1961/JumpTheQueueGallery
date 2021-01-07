import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth/auth.service';
import { LogInVisitor, Visitor } from '../shared/models/interface';
import { LoginService } from '../shared/services/login/login.service';
import { LogoutService } from '../shared/services/logout/logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginVisitor:LogInVisitor=new LogInVisitor();
  
  loginToken:string;
  constructor(private router:Router, private service:LogoutService, private loginService:LoginService,public authService:AuthService) { }

  token: any;
  ngOnInit(): void {
  
   
  }

 async loginSubmit(loginFormValue) {
    console.log("inside login");
   this.loginVisitor.username=loginFormValue.username;
   this.loginVisitor.password=loginFormValue.password;
   console.log(this.loginVisitor);
   let response=await this.loginService.login(this.loginVisitor).toPromise();
   console.log(response);
   if(response){
    console.log('Login Successful');
    localStorage.setItem('LoggedInUser',JSON.stringify(response));
    this.router.navigate(['/events']);
  }
  }
}
  

