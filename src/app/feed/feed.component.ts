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


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public oglasiData:Proizvod[]= [];
  public oglasiData$:Observable<Proizvod[]> = new Observable;
  public userData:User[] = [];
  public catchProizvod:Proizvod={} as Proizvod;
  prikaziDetalje = false;
  prikaziFormu = false;
  
input:string = "";



  constructor(private route:ActivatedRoute, public router:Router, private api:ApiService, private store:Store<AppState>, private firebaseService:FirebaseService) 
  {

    

   }

  ngOnInit(): void {

    this.oglasiData$ = of(this.oglasiData);
   

  this.nadjiOglase()
    
    
  }

  prikaziKartu(){
    this.router.navigate(['card', {id: this.input}])  
  }
  

   async nadjiOglase(){
   (await this.firebaseService.getAllOglasi()).subscribe((val:any) => {
    
    val.forEach((element:any) => {
      console.log(element)
      this.nadjiKartu(element)
   
    });
  

 
   })
  
 
  
   
}

async nadjiKartu(oglas:any){
  console.log(oglas.cardid + " blbl");
 (this.api.getCards(oglas.cardid))!.subscribe((res:any)=>{
   


     this.oglasiData$.subscribe(val =>{

      oglas.karta = res.data[0]
      oglas.count = 1;
      val.push(oglas)
          
      console.log("Posle dodavanja" + val[0].cardid);
     })

        console.log("posle dodavanaja 2 "  + this.oglasiData.length)
        console.log(oglas)
     
   
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

