import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth/auth.service';
import { Visitor } from '../shared/models/interface';
import { LoginService } from '../shared/services/login/login.service';
import { LogoutService } from '../shared/services/logout/logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginVisitor:Visitor=<Visitor>{};
  msg="";
  loginToken:string;
  constructor(private router:Router, private service:LogoutService, private loginService:LoginService,public authService:AuthService) { }

  token: any;
  ngOnInit(): void {
  
   
  }

  loginSubmit(loginformValue): void {
    // Checks if given username and password are the ones available in the database
    this.loginService.getVisitorByUsername(loginformValue.username).subscribe(
        (visitorFound) => {
          if(visitorFound==null){
            this.msg="Email doesn't exist. Please register first!!"
          }
          else{
            if (visitorFound.username ===loginformValue.username && visitorFound.password ===loginformValue.password) {
                this.loginVisitor.id=visitorFound.id;
                this.loginVisitor.username=visitorFound.username;
                this.loginVisitor.name=visitorFound.name;
                this.loginVisitor.phoneNumber=visitorFound.phoneNumber;
                this.loginVisitor.password=visitorFound.password;
                this.loginVisitor.acceptedCommercial=visitorFound.acceptedCommercial;
                this.loginVisitor.acceptedTerms=visitorFound.acceptedTerms;
                this.loginVisitor.userType=visitorFound.userType;
                localStorage.setItem('visitorLoggedIn', JSON.stringify(this.loginVisitor));
                this.router.navigate(['/events']);

            }
            else{
              this.msg="Incorrect email id or password";
            }
          }
        } 

    )
      
        }
  }

