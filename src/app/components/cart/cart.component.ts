import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Karta } from 'src/app/models/karta';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartAdd:Subject<Karta> = new Subject<Karta>();
  private cartRemove: Subject<Karta> = new Subject<Karta>();
  constructor() { }

  ngOnInit(): void {
  }

}
