import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { GlobalVariableURL } from 'src/app/GlobalVariables';

import { OrderInfo, Proizvod } from 'src/app/redux/cart.model';
import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  mojiOglasi:Proizvod[] = [];
  mojiOglasi$:Observable<Proizvod[]> = new Observable();

  transakcije:OrderInfo[] = [];
  transakcije$:Observable<OrderInfo[]> = new Observable();

  transakcijeIzabrane:OrderInfo[] = [];
  user: string = "";
  prikaziTransakcije = false;
  odabranaTransakcija = "";
sub:Subscription = new Subscription;

  constructor(private router:Router, private session:SessionServiceService, private firebase: FirebaseService, private api:ApiService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user')!
    console.log(this.user)
    if(this.mojiOglasi.length==0){}

    this.mojiOglasi$ = of(this.mojiOglasi);
    
    this.ucitajOglase();
  
  }
  


 nazad(){
   this.router.navigate([GlobalVariableURL.FEED_URL])
 }

 async ucitajOglase(){
  
  this.sub = (await this.firebase.getAllOglasi()).subscribe((val:any) => {
  
    val.forEach((element:any) => {
    
      if(element.user == this.user && element.visible=='true'){
      this.nadjiKartu(element)
      }
    });
    this.sub.unsubscribe()

  })
}

 nadjiKartu(oglas:any){

 
  (this.api.getCards(oglas.cardid))!.subscribe((res:any)=>{
    
 
 
     

       
 
       oglas.karta = res.data[0]
       oglas.count = 1;
       this.mojiOglasi.push(oglas)
           
   
 
      
    
       });
 }

 async displayTransactions(id:string){
this.odabranaTransakcija = id;

this.prikaziTransakcije = true;
(await this.firebase.getTransakcije()).subscribe(val=>
  {
 
   
    val.forEach(element=>{
     

      if(element.oglasId == id  && element.visible=='true'){
        
        this.transakcije.push(element)

      }
      
    })
    this.odabranaTransakcija = id;
this.prikaziTransakcije = true;

  }
  );


 }
 async obrisiOglas(item:any){
   
  (await  this.firebase.obrisiOglas(item));
 this.mojiOglasi.forEach((element,index)=>{
    if(element==item) this.mojiOglasi.splice(index,1);
 });
 }
 
 zatvoriTransakcije($event:any){
   this.prikaziTransakcije=false;

 }

 toFeed(){
   this.router.navigate([GlobalVariableURL.FEED_URL])
 }
 
}


