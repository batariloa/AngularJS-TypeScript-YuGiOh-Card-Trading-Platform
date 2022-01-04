import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

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


  constructor(private router:Router, private session:SessionServiceService, private firebase: FirebaseService, private api:ApiService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user')!
    console.log(this.user)
    this.mojiOglasi$ = of(this.mojiOglasi);
    this.ucitajOglase();
    this.transakcije$ = of(this.transakcije)
  }
  
 obrisi(item:any){

 }

 nazad(){
   this.router.navigate(['/feed'])
 }

 async ucitajOglase(){
   (await this.firebase.getAllOglasi()).subscribe((val:any) => {
    
    val.forEach((element:any) => {
      console.log("provera " + element.user)
    console.log("provera2" + this.user)
      if(element.user == this.user && element.visible=='true')
      this.nadjiKartu(element)
   
    });

  })
}

 nadjiKartu(oglas:any){

  console.log(oglas.cardid + " blbl");
  (this.api.getCards(oglas.cardid))!.subscribe((res:any)=>{
    
 
 
      this.mojiOglasi$.subscribe(val =>{

       
 
       oglas.karta = res.data[0]
       oglas.count = 1;
       val.push(oglas)
           
       console.log("Posle dodavanja" + val[0].cardid);
      })
 
         console.log("posle dodavanaja 2 "  + this.mojiOglasi.length)
         console.log(oglas)
      
    
       });
 }

 async displayTransactions(id:string){
this.odabranaTransakcija = id;
console.log("eo ga id " + id)
this.prikaziTransakcije = true;
await (await this.firebase.getTransakcije()).subscribe(val=>
  {
    this.transakcije = []
    val.forEach(element=>{
      console.log(element.oglasId)

      if(element.oglasId == id ){
        
        this.transakcije.push(element)

      }
      
    })
    this.odabranaTransakcija = id;
this.prikaziTransakcije = true;
console.log("evo su " + this.transakcije[0])
  }
  );


 }
 obrisiOglas(item:any){
   this.firebase.obrisiOglas(item);
 }
 
 zatvoriTransakcije($event:any){
   this.prikaziTransakcije=false;

 }
 
}


