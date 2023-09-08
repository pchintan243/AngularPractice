import { ResolveFn } from '@angular/router';

export const apiResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
