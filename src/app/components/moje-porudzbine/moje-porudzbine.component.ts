import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GlobalVariableURL } from 'src/app/GlobalVariables';
import { OrderInfo, Proizvod } from 'src/app/redux/cart.model';
import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-moje-porudzbine',
  templateUrl: './moje-porudzbine.component.html',
  styleUrls: ['./moje-porudzbine.component.css']
})
export class MojePorudzbineComponent implements OnInit {


  mojiOglasi:Proizvod[] = [];
  mojiOglasi$:Observable<Proizvod[]> = new Observable();

  transakcije:OrderInfo[] = [];
  transakcije$:Observable<OrderInfo[]> = new Observable();

  
  prikaziDetalje = false;

  public catchProizvod:Proizvod={} as Proizvod;

  constructor(private router:Router, private session:SessionServiceService, private firebase: FirebaseService, private api:ApiService) { }

  ngOnInit(): void {
  
    this.mojiOglasi$ = of(this.mojiOglasi);
    this.getTransactions();
    this.transakcije$ = of(this.transakcije)
    console.log("user je " + sessionStorage.getItem('user'))
  }
  

 nazad(){
   this.router.navigate([GlobalVariableURL.FEED_URL])
 }

 async getTransactions(){
   this.transakcije = [];

  (await this.firebase.getTransakcije()).subscribe(val=>
   {
     this.transakcije = []
     val.forEach(element=>{
       if(element.buyerId== sessionStorage.getItem('user')){
    
         this.ucitajOglas(element)
 
       }
       
    
     
   }
   );
   }
   
 )}

 async ucitajOglas(transakcija:OrderInfo){

   if(transakcija.oglasId!== undefined )
   (await this.firebase.getSpecificOglas(transakcija.oglasId)).subscribe((val:any) => {
   
  if(val!==undefined)
      this.nadjiKartu(val)
   
   

  })
}

 nadjiKartu(oglas:any){


  (this.api.getCards(oglas.cardid))!.subscribe((res:any)=>{
    
 
 
      this.mojiOglasi$.subscribe(val =>{

       
 
       oglas.karta = res.data[0]
       oglas.count = 1;
       
       val.push(oglas)
           
       
      })
      
    
       });
 }


 
 
 zatvoriPreview($event:any){
   this.prikaziDetalje=false;

 }
 displayProductPreview($event:Proizvod) {
  this.catchProizvod = $event;
  this.prikaziDetalje=true;
  
 }
 toFeed(){
   this.router.navigate([GlobalVariableURL.FEED_URL])
 }
 

}
