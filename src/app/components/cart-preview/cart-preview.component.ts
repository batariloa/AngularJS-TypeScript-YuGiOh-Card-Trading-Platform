import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/models/app.state';
import { ICart, Proizvod } from 'src/app/redux/cart.model';
import { DeleteFromCart } from 'src/app/redux/cart.model.action';
import * as CartActions from  "src/app/redux/cart.model.action";
import { selectCart } from 'src/app/redux/cart.selectors';

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
  constructor(private store:Store<AppState>, private route:ActivatedRoute) {

  this.cart =  this.store.select(selectCart);

   }

  ngOnInit(): void {
  
    this.cart.subscribe(val =>
      {
      
     console.log(this.cartItems)
      })

     
  }

  obrisIzKorpe(item:Proizvod){
    this.store.dispatch(DeleteFromCart(item))
  }
  dodajUKorpu(item:Proizvod){
    this.store.dispatch(CartActions.AddToCart(item))
  }

}
