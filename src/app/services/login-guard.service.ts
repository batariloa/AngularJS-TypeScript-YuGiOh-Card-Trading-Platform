import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    console.log("stanje " + localStorage.getItem('login'))
    if (sessionStorage.getItem('login')!="true") {
     
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
