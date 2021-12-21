import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ICart, Karta, Proizvod } from 'src/app/redux/cart.model';
import { selectCart } from 'src/app/redux/cart.selectors';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cart$:Observable<Proizvod[]> = new Observable;
  cartItems:any = [];
  private cartRemove: Subject<Karta> = new Subject<Karta>();
  constructor(private store:Store) {

    this.cart$ = this.store.select(selectCart);
   }

  ngOnInit(): void {
    this.cart$.subscribe(val=>
      {
        this.cartItems = val
      })
  }

}
