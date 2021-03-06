import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { observable, Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/models/app.state';
import { ICart, Proizvod } from 'src/app/redux/cart.model';
import { DeleteFromCart } from 'src/app/redux/cart.model.action';
import * as CartActions from  "src/app/redux/cart.model.action";
import { selectCart, selectPriceKorpa } from 'src/app/redux/cart.selectors';
import { GlobalVariableURL } from 'src/app/GlobalVariables';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.css']
})
export class CartPreviewComponent implements OnInit {

 cart:Observable<Proizvod[]> ;
 cartItems:any[] = [];
 proizvod:Proizvod = new Proizvod;
  visible: boolean = false;
  suma:Observable<number> = new Observable;
  constructor(private store:Store<AppState>, private route:ActivatedRoute, private router:Router) {

  this.cart =  this.store.select(selectCart);
 this.suma = this.store.select(selectPriceKorpa)
   }

  ngOnInit(): void {
  
   

     
  }

  obrisIzKorpe(item:Proizvod){
    this.store.dispatch(DeleteFromCart(item))
  }
  dodajUKorpu(item:Proizvod){
    this.store.dispatch(CartActions.AddToCart(item))
  }
  toCart(){
    this.router.navigate([GlobalVariableURL.CART_URL])
  }

}
