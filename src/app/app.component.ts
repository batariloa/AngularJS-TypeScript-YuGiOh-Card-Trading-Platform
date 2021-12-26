import { Component, OnInit } from '@angular/core';
import * as CartActions from './redux/cart.model.action';
import { ICart, Proizvod } from './redux/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './models/app.state';
import { FirebaseService } from './services/firebase.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'YuGiOhStore';
  isLoggedIn = false;

  proizvod:Proizvod= {} as Proizvod;

  constructor(public loginService:FirebaseService)
  {
    

  }
  ngOnInit(){
if(localStorage.getItem('user')!=null){
  this.isLoggedIn = true;
}else{
  this.isLoggedIn=false;
}
  }

  loginStatus(success:boolean){
    console.log(success);
if(success){
 
  this.isLoggedIn= true;
}
  }

}
