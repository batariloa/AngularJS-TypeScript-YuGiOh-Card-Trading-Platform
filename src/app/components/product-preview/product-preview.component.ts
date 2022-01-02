import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Proizvod } from 'src/app/redux/cart.model';
import * as CartActions from  "src/app/redux/cart.model.action";
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  public proizvod$:Observable<Proizvod> = new Observable;
  @Input() proizvod:Proizvod = {} as Proizvod
  @Output() eventClose:EventEmitter<any> = new EventEmitter;

  constructor(private route: ActivatedRoute, private router:Router, private store:Store) {
    
   
  }

  ngOnInit(): void {
    
    
  }


close(){
  this.eventClose.emit(true)
}

dodajUKorpu(){

  console.log(this.proizvod.count + " dd")
  this.store.dispatch(CartActions.AddToCart(this.proizvod))

  
}
}
