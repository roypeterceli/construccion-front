import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@wow/core/services';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.userLoggedIn()) {
    return true;
  } else {
    router.navigateByUrl("/auth/login").then();
    return false;
  }

};
