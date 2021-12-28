import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { KartaPreviewComponent } from '../components/karta-preview/karta-preview.component';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from '../models/app.state';
import { Proizvod, User } from '../redux/cart.model';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public oglasiData:any = [];
  public userData:User[] = [];
  public catchProizvod:Proizvod={} as Proizvod;
  prikaziDetalje = false;
  prikaziFormu = false;
  
input:string = "";



  constructor(private route:ActivatedRoute, public router:Router, private api:ApiService, private store:Store<AppState>, private firebaseService:FirebaseService
    ) 
  {
    

   }

  ngOnInit(): void {
    
    this.nadjiOglase()
  
    
  }

  prikaziKartu(){
    this.router.navigate(['card', {id: this.input}])  
  }
  

   async nadjiOglase(){
   (await this.firebaseService.getAllOglasi()).subscribe(val =>{
     this.oglasiData = val
     console.log("data12 "+ val)
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

