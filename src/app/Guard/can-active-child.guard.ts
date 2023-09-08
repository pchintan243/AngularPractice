import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const canActiveChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  // const router = new Router;

  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  else {
    router.navigate(['Home'])
    return false;
  }
};
