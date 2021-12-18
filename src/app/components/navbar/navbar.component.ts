import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app.state';
import { selectCountProducts, selectPriceKorpa } from 'src/app/redux/cart.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  countProizvod$: Observable<number>;
  sumProizvod$: Observable<number>;
  constructor( private store:Store<AppState>) { 
    this.countProizvod$ = store.select(selectCountProducts);
    this.sumProizvod$ = store.select(selectPriceKorpa);
    console.log(this.countProizvod$)
  }

  ngOnInit(): void {
  }

}
