import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root' // toute la durée de vie; ressemble à un service
})
export class AuthGuard implements CanActivate { // retournner true ou false 
  canActivate() {
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Le Guard a bien été appelé!'); // pour l'instant autorise tout le monde.
      return true;
  }
  
}
