import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Visitor } from '../shared/models/interface'
import { LoginService } from '../shared/services/login/login.service';
import { RegistrationService } from '../shared/services/registration/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  visitorResult: Visitor;
  visitorToken:string;
  message="";

  constructor(private router:Router,private registrationService:RegistrationService,private loginService:LoginService) { }

  ngOnInit(): void {
    
  }

  register(formValue){
    const visitor:Visitor=new Visitor();
    visitor.username = formValue.username;
    visitor.name =formValue.name;
    visitor.phoneNumber = formValue.phone;
    visitor.password = formValue.password;
    visitor.acceptedCommercial = formValue.acceptedCommercial;
    visitor.acceptedTerms = formValue.acceptedTerms;
    visitor.userType = false;
    
    this.registrationService.registerVisitor(visitor).subscribe(
      data=>{
      this.visitorResult=data;
      this.visitorToken=localStorage.getItem(this.visitorResult.username)
      if(this.visitorToken==null){
      localStorage.setItem(this.visitorResult.username,JSON.stringify(this.visitorResult));
      console.log("response recieved");
      this.router.navigate(["/login"]);
      }
      else{
        this.message="Visitor already exists"
      }
      },
     error=> console.log("Error Occurred")

    )

    

    
   
  }

  
}
