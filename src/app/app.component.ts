import { Component, OnInit } from '@angular/core';
import * as CartActions from './redux/cart.model.action';
import { ICart, Proizvod } from './redux/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './models/app.state';
import { FirebaseService } from './services/firebase.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'YuGiOhStore';
  isLoggedIn = false;
  displayName:string = "";
  proizvod:Proizvod= {} as Proizvod;

  constructor(public loginService:FirebaseService, private router: Router)
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

  registerRedirect($event:any){
    if($event===true)
    this.router.navigateByUrl("/register")
    
  }

}
