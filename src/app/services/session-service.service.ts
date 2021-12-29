import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
public isLoggedIn = false;
public isLoggedIn$ = new Observable;
username:string = "";
user:string = "milan";
  constructor() { 
 this.user = localStorage.getItem('user')!;

    this.isLoggedIn$  = of(this.isLoggedIn);
  }


  logIn(){
    this.isLoggedIn = true;
  }
  logOut(){
    this.isLoggedIn = false;
  }
}
