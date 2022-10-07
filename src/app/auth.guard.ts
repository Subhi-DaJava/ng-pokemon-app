import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root' // toute la durée de vie; ressemble à un service
})
export class AuthGuard implements CanActivate { // retournner true ou false 
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}
  canActivate(): boolean {
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn) {
      return true;
    }  

    this.router.navigate(['/login']);
    return false;
  }
  
}
