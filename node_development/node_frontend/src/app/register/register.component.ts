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
  visitor:Visitor=new Visitor();

  constructor(private router:Router,private registrationService:RegistrationService,private loginService:LoginService) { }

  ngOnInit(): void {
    
  }

 async registerationSubmit(registrationFormValue){
   console.log(registrationFormValue);
   this.visitor.username =registrationFormValue.username;
   this.visitor.name =registrationFormValue.name;
   this.visitor.phoneNumber = registrationFormValue.phone;
   this.visitor.password = registrationFormValue.password;
   this.visitor.acceptedCommercial = registrationFormValue.acceptedCommercial;
   this.visitor.acceptedTerms = registrationFormValue.acceptedTerms;
   this.visitor.role =0;
    console.log(this.visitor);
  let asyncResult= await this.registrationService.register(this.visitor).toPromise();
   console.log(asyncResult);
   if(asyncResult){
     console.log("async Result");
     console.log("Registered Successfully");
     this.router.navigate(['/login']);
   }
   else{
     console.log("Error Occurred")
    //throw new Error(`HTTP error! status: ${asyncResult.status}`);
   }
     

  }  
   
}

  

