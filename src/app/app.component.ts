import { Component, OnInit } from '@angular/core';
import * as CartActions from './redux/cart.model.action';
import { ICart, Proizvod } from './redux/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './models/app.state';
import { FirebaseService } from './services/firebase.service';
import { Router } from '@angular/router';
import { SessionServiceService } from './services/session-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'YuGiOhStore';
  isLoggedIn$ = new Observable;
  displayName:string = "";
  proizvod:Proizvod= {} as Proizvod;

  constructor(public loginService:FirebaseService, private router: Router, public sessionService: SessionServiceService)
  {

    
    
  
    

  }
  ngOnInit(){

if(this.sessionService.isLoggedIn==false){
  this.router.navigate(['/login'])
  this.sessionService.isLoggedIn = true;
}else{
  this.router.navigate(['/feed'])
  this.sessionService.isLoggedIn=false;
}




  }




}
