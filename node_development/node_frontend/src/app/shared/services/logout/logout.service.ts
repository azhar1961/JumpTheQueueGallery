import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  isLoggedIn: boolean;
  token:any;
  constructor() { 
    
  }

  isUserLoggedIn(){
  return !!localStorage.getItem('LoggedInUser'); //checking whether logged in token is present or not
  }

  
}
