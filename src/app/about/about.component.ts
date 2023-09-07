import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  // active route is use to get the active route
  constructor(private route: Router, private activeRoute: ActivatedRoute) { }
  redirect() {
    // Path for this one --> http://localhost:4200/About/Home
    this.route.navigate(['Home'], { relativeTo: this.activeRoute })
  }
  home() {
    // Path for this one --> http://localhost:4200/Home
    this.route.navigateByUrl('/Home')
    // this.route.navigateByUrl('Home') --> same as above
  }
}
