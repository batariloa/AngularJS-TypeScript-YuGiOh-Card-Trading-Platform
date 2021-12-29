import { Injectable } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DocumentSnapshot, Firestore } from 'firebase/firestore';
import { map, Observable, tap } from 'rxjs';
import { Proizvod } from '../redux/cart.model';
import { SessionServiceService } from './session-service.service';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
isLoggedIn = false;
oglasi:Observable<any[]> = new Observable;
user: string ="";

  constructor(public firebaseAuth:AngularFireAuth, public firestore:AngularFirestore, private firebase:AngularFireDatabase, private session:SessionServiceService) {
   


   }


   async singin(email:string, password:string){
let userid;
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(
      async res=>{
        
        userid=res.user?.uid;

      
      sessionStorage.setItem('id', JSON.stringify(res.user?.uid));
      sessionStorage.setItem('login', "true");
     sessionStorage.setItem('user', res.user?.uid! );
     this.user = res.user?.uid!;
       await   this.firestore.collection('users').doc(res.user?.uid).valueChanges().subscribe(
         data =>{
         
          console.log(data)
          localStorage.setItem('userdata',JSON.stringify(data));
         }
       )
            
        

      }

    )

   }

   async signup(email:string, password:string, username:string){
    let user;
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(

     res=>{
    
      sessionStorage.setItem('id', JSON.stringify(res.user?.uid));

      return this.firestore.collection('users').doc(res.user?.uid).set({
         displayName: username
       })
      
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user))
        
        
      }
    )


    

   }

   async addOglas(proizvod:Proizvod){
    
    await this.firestore.collection('oglasi').add({
      cardid: proizvod.cardid,
      user:this.user,
      stanje:proizvod.stanje,
      price: proizvod.price,
      quantity: proizvod.quantity,
   
    })


    

   }

   async getAllOglasi(){
   
   this.oglasi = this.firestore.collection('oglasi').valueChanges();
   return this.oglasi;

 
  }
  async getMyOglasi(){
   
    this.oglasi = this.firestore.collection('oglasi').valueChanges();
    return this.oglasi;
 
  
   } 

    
   

   



   logout(){
     this.firebaseAuth.signOut();
     sessionStorage.setItem('login', "false");
   }
}
