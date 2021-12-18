import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { AppState } from 'src/app/models/app.state';import { ICart, Karta, Proizvod } from 'src/app/redux/cart.model';
import * as CartActions from  "src/app/redux/cart.model.action";
import { selectPriceKorpa } from 'src/app/redux/cart.selectors';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-karta-preview',
  templateUrl: './karta-preview.component.html',
  styleUrls: ['./karta-preview.component.css']
})
export class KartaPreviewComponent implements OnInit {
  @Input() oglas: Proizvod = {} as Proizvod;
  @Output() alert: EventEmitter<any> = new EventEmitter();



   cart: Observable<ICart>;
  public cardData:any= {};
;



  constructor(private route:ActivatedRoute, private api:ApiService, private store:Store<AppState>) { 
  
    this.cart = store.select('cart');
    this.oglas = {} as Proizvod
    this.oglas.karta = {} as Karta;

    
  }

  ngOnInit(): void {
 
 
      this.nadjiKartu();
    
  
  }


  nadjiKartu(){
    (this.api.getCards(this.oglas.cardid))!.subscribe((res:any)=>{
      this.cardData = res.data[0];
          console.log("yipe");
          console.log(this.oglas.cardid + "bloblo" )
          console.log(this.cardData);
        });
    }
    
    dodajUKorpu(){

      
   
      this.store.dispatch(CartActions.AddToCart(this.oglas))

      this.store.select('cart').subscribe(val =>
        {
          console.log(val)
        }
        )
      
      
    }
}
