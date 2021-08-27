import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
  CanActivateChild
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { UserService } from './user.service';
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree | Promise<boolean | UrlTree>  | Observable<boolean | UrlTree> {
    return this.userService.user.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        if (isAuth && user.isAdmin) {
          return true;
        }
        if (isAuth && !user.isAdmin) {
          return this.router.createUrlTree(['/']);
        }
        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}
