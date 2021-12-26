import { Injectable } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DocumentSnapshot, Firestore } from 'firebase/firestore';
import { map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
isLoggedIn = false;

  constructor(public firebaseAuth:AngularFireAuth, public firestore:AngularFirestore) {
   

   }


   async singin(email:string, password:string){
let userid;
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(
      async res=>{
        
        userid=res.user?.uid;

        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user))
     console.log("ovo je id " + res.user?.uid)
       await   this.firestore.collection('users').doc(res.user?.uid).valueChanges().subscribe(
         data =>{
          console.log(data)
          localStorage.setItem('userdata',JSON.stringify(data));
         }
       )
            
        

      }
    )

   }

   async singup(email:string, password:string, username:string){
    let user;
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(

     res=>{
      localStorage.setItem('id', JSON.stringify(res.user?.uid));
      return this.firestore.collection('users').doc(res.user?.uid).set({
         displayName: username
       })
      
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user))
        
        
      }
    )

   }

   logout(){
     this.firebaseAuth.signOut();
     localStorage.removeItem('user');
   }
}
