import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { KartaPreviewComponent } from '../components/karta-preview/karta-preview.component';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from '../models/app.state';
import { Proizvod, User } from '../redux/cart.model';
import { FirebaseService } from '../services/firebase.service';
import { timingSafeEqual } from 'crypto';
import { SessionServiceService } from '../services/session-service.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public oglasiData:Proizvod[]= [];
  public tempData:Proizvod[]= [];
  public oglasiData$:Observable<Proizvod[]> = new Observable;
  public userData:User[] = [];
  public catchProizvod:Proizvod={} as Proizvod;
  prikaziDetalje = false;
  prikaziFormu = false;
  
input:string = "";



  constructor(private route:ActivatedRoute, public router:Router, private api:ApiService, private store:Store<AppState>, private firebaseService:FirebaseService, private session:SessionServiceService) 
  {
    
    

   }

  ngOnInit(): void {

    this.oglasiData$ = of(this.oglasiData);
   console.log("feed element")

  this.nadjiOglase()
    
    
  }

  prikaziKartu(){
    this.router.navigate(['card', {id: this.input}])  
  }
  

   async nadjiOglase(){
   (await this.firebaseService.getAllOglasi()).subscribe((val:any) => {
     this.tempData = [];
    
    val.forEach((element:any) => {
      console.log(element.id + " gotov servis")
      this.nadjiKartu(element)
   
    });
    this.oglasiData = this.tempData
  

 
   })
  
 
  
   
}

async nadjiKartu(oglas:any){

  console.log("koja karta" + oglas.cardid);
 (this.api.getCards(oglas.cardid))!.subscribe((res:any)=>{
   


  

      oglas.karta = res.data[0]
      oglas.count = 1;
      this.tempData.push(oglas)
      console.log("item "+ JSON.stringify(oglas))
          
 

      });
  
  }

displayProductPreview($event:Proizvod) {
 this.catchProizvod = $event;
 this.prikaziDetalje=true;
 
}


gotoHome(){
  this.router.navigate(['/cart']);  // define your component where you want to go
}

showForm(){
  if(this.prikaziFormu==false){
    this.prikaziFormu=true
  }
  else{
    this.prikaziFormu=false;
  }
}
}

