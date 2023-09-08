import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActiveGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // const router = new Router;
  console.log("fds");
  
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  else {
    router.navigate(['Home'])
    return false;
  }
};
