import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { AppState } from '../models/app.state';
import { selectCountProducts } from '../redux/cart.selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public cardData:any[] = [];
input:number;
countProizvod$: Observable<number>  ;


  constructor(private route:ActivatedRoute, private router:Router, private api:ApiService, private store:Store<AppState>) 
  {
    this.countProizvod$ = store.select(selectCountProducts);
    console.log(this.countProizvod$)
  this.input=0;  
   }

  ngOnInit(): void {
    this.nadjiKarte()
    
    
  }

  prikaziKartu(){
    this.router.navigate(['card', {id: this.input}])  
  }

  async nadjiKarte(){
    (this.api.getAllCards())!.subscribe((res:any)=>{
      this.cardData = res.data;
      console.log(this.cardData)
      
    });
}
}
