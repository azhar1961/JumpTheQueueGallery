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
  return !!localStorage.getItem('token');//checking whether token is present or not
  }

  
}
