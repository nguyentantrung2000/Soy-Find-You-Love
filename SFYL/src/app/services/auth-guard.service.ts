import { Injectable } from '@angular/core';
import { LoginGGService } from './login-gg.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(public auth: LoginGGService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.auth.checkAuth() ? true : this.router.parseUrl('');
  }
}
