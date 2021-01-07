import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logged = false;
  constructor() { }

  public isLogged(): boolean {
    return this.logged;
  }
  public setLogged(login: boolean): void {
    this.logged = login;
  }

}
