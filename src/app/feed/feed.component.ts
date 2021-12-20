import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { KartaPreviewComponent } from '../components/karta-preview/karta-preview.component';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from '../models/app.state';
import { Proizvod, User } from '../redux/cart.model';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public oglasiData:Proizvod[] = [];
  public userData:User[] = [];
input:number;



  constructor(private route:ActivatedRoute, private router:Router, private api:ApiService, private store:Store<AppState>) 
  {
    
  this.input=0;  
   }

  ngOnInit(): void {
    this.nadjiKarte()
  
    
  }

  prikaziKartu(){
    this.router.navigate(['card', {id: this.input}])  
  }

   nadjiKarte(){
   
    (this.api.getOglasi())!.subscribe((res:any)=>{
      
     this.oglasiData = res.oglasi;
     

  
    });
}

    



}

