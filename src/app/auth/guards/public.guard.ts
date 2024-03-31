import { Injectable, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
import { tap, Observable, take, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })

export class PublicGuard { }

const checkAuthStatus = (): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication().pipe(
    tap((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        router.navigate(['./']);
      }
    }),
    map(isAuthenticated => !isAuthenticated)
  )
}


export const canActivateGuardPublic: CanActivateFn = checkAuthStatus;
export const canMatchGuardPublic: CanMatchFn = checkAuthStatus;
