import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from './shared/services/logout/logout.service';
import {AuthService} from './authentication/auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isLoggedIn:boolean;
  token:any;
  constructor(public service:LogoutService, private router:Router,public authService:AuthService){
    
  }

  
  logout(){
    localStorage.removeItem('visitorLoggedIn');
    localStorage.removeItem('currentEvent');
    localStorage.removeItem('events');
    this.router.navigate(["/login"]); 
  }
 
  navbarOpen= false;
  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }

  goToEvents(){
      this.router.navigate(['/events']);
    }
  }

