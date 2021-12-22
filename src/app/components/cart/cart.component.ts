import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ICart, Karta, Proizvod } from 'src/app/redux/cart.model';
import { AddToCart, DeleteFromCart } from 'src/app/redux/cart.model.action';
import { selectCart, selectPriceKorpa } from 'src/app/redux/cart.selectors';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cart$:Observable<Proizvod[]> = new Observable;
  sum$: Observable<Number>  = new Observable
  cartItems:any = [];
  private cartRemove: Subject<Karta> = new Subject<Karta>();
  constructor(private store:Store) {

    this.cart$ = this.store.select(selectCart);
   }

  ngOnInit(): void {
    this.sum$ = this.store.select(selectPriceKorpa)
    this.cart$.subscribe(val=>
      {
        this.cartItems = val
      })

      
  }



  obrisIzKorpe(item:Proizvod){
    this.store.dispatch(DeleteFromCart(item))
  }
  dodajUKorpu(item:Proizvod){
    this.store.dispatch(AddToCart(item))
  }


}
