import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin: boolean = false;

  isLogin() {
    this.isLoggedin = true;
  }

  isLogout() {
    this.isLoggedin = false;
  }

  isAuthenticated() {
    return this.isLoggedin;
  }
}
