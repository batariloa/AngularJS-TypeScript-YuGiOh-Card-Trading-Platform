import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/models/app.state';
import { Karta } from 'src/app/models/karta';
import { ICart, Proizvod } from 'src/app/redux/cart.model';
import * as CartActions from  "src/app/redux/cart.model.action";
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-karta-preview',
  templateUrl: './karta-preview.component.html',
  styleUrls: ['./karta-preview.component.css']
})
export class KartaPreviewComponent implements OnInit {
  @Input() idKarte:number  = 0;
  @Output() alert: EventEmitter<any> = new EventEmitter();

  oglas:Proizvod = {} as Proizvod;
  sub?:Subscription;


   cart: Observable<ICart>;
  public cardData:any= {};
  updateItem = false;
 
  constructor(private route:ActivatedRoute, private api:ApiService, private store:Store<AppState>) { 

    this.cart = store.select('cart');

    this.oglas.price = 400;
    this.oglas.id = this.idKarte;

    
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = Number.parseInt(params['id']);
      this.idKarte = id;
    
      this.nadjiOglas();
      this.nadjiKartu();
     
   }  );
    
  }

 nadjiKartu(){
    (this.api.getCards(this.idKarte))!.subscribe((res:any)=>{
      this.cardData = res.data[0];
          console.log("yipe");
          console.log(this.cardData);
        });
    }
    
    nadjiOglas(){
      (this.api.getOglas(this.oglas.id))!.subscribe((res:any)=>{
        this.oglas = res.oglasi
        
            console.log("yiplsade");
            console.log(res.oglasi);
          
          });
      }

    dodajUKorpu(){

      console.log(this.cart)
      this.store.dispatch(CartActions.AddToCart(this.oglas))
      
      
    }

}
