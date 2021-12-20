import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { AppState } from 'src/app/models/app.state';import { ICart, Karta, Proizvod } from 'src/app/redux/cart.model';
import * as CartActions from  "src/app/redux/cart.model.action";
import { selectCart, selectPriceKorpa } from 'src/app/redux/cart.selectors';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-karta-preview',
  templateUrl: './karta-preview.component.html',
  styleUrls: ['./karta-preview.component.css']
})
export class KartaPreviewComponent implements OnInit {
  @Input() oglas: Proizvod = {} as Proizvod;
  @Output() alert: EventEmitter<any> = new EventEmitter();

  listaProizvoda:Observable<Proizvod[]> = new Observable;
  trenutniBrojUKorpi:number = 0;

  public cardData:any;

;



  constructor(private route:ActivatedRoute, private api:ApiService, private store:Store<AppState>) { 
  
  
    this.oglas = {} as Proizvod
    this.oglas.count = 1;
    this.oglas.karta = {} as Karta;
    this.listaProizvoda = this.store.select(selectCart);
    
    
  }

  ngOnInit(): void {

 
      this.nadjiKartu();
    
    
  
  }


  nadjiKartu(){
    (this.api.getCards(this.oglas.cardid))!.subscribe((res:any)=>{
      this.cardData = res.data[0];
      this.oglas.karta = res.data[0]
      this.oglas.count = 1;
          console.log("yipe");
     
        });
    }
    
    dodajUKorpu(){

      
      this.store.dispatch(CartActions.AddToCart(this.oglas))

     
      
      
    }
}
