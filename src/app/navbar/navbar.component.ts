import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private Router: Router) { }
  login() {
    localStorage.setItem("token", Math.random().toString());
  }
  logout() {
    localStorage.removeItem('token');
    this.Router.navigate(['Home']);
  }
}
