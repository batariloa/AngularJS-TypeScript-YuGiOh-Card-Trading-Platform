import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { AppState } from 'src/app/models/app.state';
import { selectCountProducts, selectPriceKorpa } from 'src/app/redux/cart.selectors';
import { DoBootstrap } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  countProizvod$: Observable<number>;
  sumProizvod$: Observable<number>;
  showCart: boolean = false;
username: string = ""
  @Output() logoutEmit: EventEmitter<boolean> = new EventEmitter();



  constructor( private store:Store<AppState>, private serviceLogin: FirebaseService, private serviceAcc: AngularFirestore) { 
    this.countProizvod$ = store.select(selectCountProducts);
    this.sumProizvod$ = store.select(selectPriceKorpa);
    console.log(this.countProizvod$)
    
   
  }

  ngOnInit(): void {
  
 var  localID  = JSON.parse(localStorage.getItem('userdata') ||"");
 console.log(localID['displayName']  + "eto koja prica")
 this.username = localID['displayName'];
  
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
  this.logoutEmit.emit(false);
}



}
