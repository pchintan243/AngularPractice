import { CanDeactivateFn } from '@angular/router';

export const canDeActivateGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {

  console.log(component);
  if (component && component.username) {
    const confir = confirm('Are you sure');
    if (confir) {
      return true;
    }
    else {
      return false;
    }
  }
  return true;
};
