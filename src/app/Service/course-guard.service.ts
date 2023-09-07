import { AuthService } from './auth.service';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanActivate, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
class CourseGuardService {

  constructor(private AuthService: AuthService, private Router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.AuthService.isAuthenticated()) {
      return true;
    }
    else {
      this.Router.navigate(['/Home']);
      return false;
    }
  }
}
export const IsCourseGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean => {
  return inject(CourseGuardService).canActivate(route, state)
}