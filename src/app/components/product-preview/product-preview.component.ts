import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { Proizvod } from 'src/app/redux/cart.model';
import * as CartActions from  "src/app/redux/cart.model.action";
import { EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  public proizvod$:Observable<Proizvod> = new Observable;
  @Input() proizvod:Proizvod = {} as Proizvod
  @Output() eventClose:EventEmitter<any> = new EventEmitter;
  username:string = "";
  username$: Observable<string> = new Observable

  constructor(private route: ActivatedRoute, private router:Router, private store:Store, private firebase: FirebaseService) {
    
   
  }

  ngOnInit(): void {

  }

 
close(){
  this.eventClose.emit(true)
}

dodajUKorpu(){

  
  this.store.dispatch(CartActions.AddToCart(this.proizvod))

  
}


}
