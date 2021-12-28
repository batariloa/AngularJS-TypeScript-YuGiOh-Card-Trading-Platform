import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  @Output() prikaziViseEmitter: EventEmitter<any> = new EventEmitter();

  listaProizvoda:Observable<Proizvod[]> = new Observable;
  trenutniBrojUKorpi:number = 0;

  public cardData:any;

;



  constructor(private router:Router, private api:ApiService, private store:Store<AppState>) { 
  
  
    this.oglas = {} as Proizvod
    this.oglas.count = 1;
    this.oglas.karta = {} as Karta;
    this.listaProizvoda = this.store.select(selectCart);
    
    
  }

  ngOnInit(): void {
    console.log("unutar " + this.oglas.karta.name)
      
  
  }



    
    dodajUKorpu(){

      console.log(this.oglas.count + " dd")
      this.store.dispatch(CartActions.AddToCart(this.oglas))

      
    }

    prikaziVise(){
      console.log("prikazi vise"+ this.oglas.id) 
      this.prikaziViseEmitter.emit(this.oglas);//salje podatke roditelju
      
  }
}
