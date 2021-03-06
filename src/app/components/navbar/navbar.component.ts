import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { AppState } from 'src/app/models/app.state';
import { selectCountProducts, selectPriceKorpa } from 'src/app/redux/cart.selectors';
import { DoBootstrap } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { SessionServiceService } from 'src/app/services/session-service.service';
import { JsonpClientBackend } from '@angular/common/http';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Router } from '@angular/router';
import { GlobalVariableURL } from 'src/app/GlobalVariables';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  countProizvod$: Observable<number>;
  sumProizvod$: Observable<number>;
  showCart: boolean = false;
  username$:Observable<String> = new Observable;
  username: String = "";
  sub: Subscription = new Subscription();
  

  @Output() logoutEmit: EventEmitter<boolean> = new EventEmitter();



  constructor( private store:Store<AppState>, private serviceLogin: FirebaseService, private serviceAcc: AngularFirestore, private session:SessionServiceService,
    private router:Router) { 
    this.countProizvod$ = store.select(selectCountProducts);
    this.sumProizvod$ = store.select(selectPriceKorpa);
   
  }

  ngOnInit(): void {

this.username = sessionStorage.getItem('username')!

 
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.username = sessionStorage.getItem('username')!;
      
  }
  prikaziKorpu(){
    if(this.showCart ==false){
      this.showCart=true
    }
    else{
      this.showCart=false;
    }
   
}
logout(){
  this.serviceLogin.logout();
  this.router.navigate([GlobalVariableURL.LOGIN_URL]);

}

toPorudzbine(){
  this.router.navigate([GlobalVariableURL.MY_ORDERS_URL])
}

toMyProducts(){
  this.router.navigate([GlobalVariableURL.MY_PRODUCTS_URL])
}
toFeed(){
  this.router.navigate([GlobalVariableURL.FEED_URL])
}


}
