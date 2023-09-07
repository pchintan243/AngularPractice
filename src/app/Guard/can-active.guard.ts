import { CanActivateFn } from '@angular/router';

export const canActiveGuard: CanActivateFn = (route, state) => {
  return true;
};
