import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Proizvod } from 'src/app/redux/cart.model';
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
  user: string = "";


  constructor(private router:Router, private session:SessionServiceService, private firebase: FirebaseService, private api:ApiService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user')!
    console.log(this.user)
    this.mojiOglasi$ = of(this.mojiOglasi);
    this.ucitajOglase();

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
      if(element.user == this.user)
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
}
