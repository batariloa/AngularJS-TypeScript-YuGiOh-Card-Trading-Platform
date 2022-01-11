import { Injectable } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DocumentSnapshot, Firestore } from 'firebase/firestore';
import { map, Observable, tap } from 'rxjs';
import { OrderInfo, Proizvod, User, UserData } from '../redux/cart.model';
import { SessionServiceService } from './session-service.service';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;
  oglasi: Observable<any[]> = new Observable;
  transakcije: Observable<any[]> = new Observable;
  user: Observable<any> = new Observable
  oglas:Observable<any> = new Observable;


  constructor(public firebaseAuth: AngularFireAuth, public firestore: AngularFirestore, private firebase: AngularFireDatabase, private session: SessionServiceService) {



  }


  async signin(email: string, password: string) {
    let userid;
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(
      async res => {

        
        userid = res.user?.uid;
        sessionStorage.setItem('login', "true");
        sessionStorage.setItem('user', res.user?.uid!);

        this.firestore.collection('users').doc(res.user?.uid).get().subscribe((val: any) => {
      

          sessionStorage.setItem('username', val.data().displayName)
       

        })


      }
    )
  }

  async signup(email: string, password: string, username: string) {

    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(

      res => {

        sessionStorage.setItem('id', JSON.stringify(res.user?.uid));
        sessionStorage.setItem('login', 'true');
        return this.firestore.collection('users').doc(res.user?.uid).set({
          displayName: username,

        })


      }
    )



    {

    }
  }

  async addOglas(proizvod: Proizvod) {

    await this.firestore.collection('oglasi').add({
      cardid: proizvod.cardid,
      user: sessionStorage.getItem('user'),
      stanje: proizvod.stanje,
      price: proizvod.price,
      quantity: proizvod.quantity,
      set: proizvod.set,
      visible: 'true',
      username: proizvod.username


    })




  }

  async getAllOglasi() {

    this.oglasi = this.firestore.collection('oglasi').valueChanges({
      idField: 'id'
    });

    console.log("gotov servis ")
    return this.oglasi;


  }
  async getMyOglasi() {

    this.oglasi = this.firestore.collection('oglasi').valueChanges();
    return this.oglasi;


  }


  async getTransakcije() {
    this.transakcije = this.firestore.collection('transactions').valueChanges();
    return this.transakcije;


  }


  checkout(items: Proizvod[], info: OrderInfo) {
    items.forEach(element => {
      this.dodajTransakciju(element, info);
      this.firestore.collection("oglasi").doc(element.id).update({ quantity: element.quantity - element.count });
    })

  }

  dodajTransakciju(item: Proizvod, info: OrderInfo) {

    this.firestore.collection('transactions').add({

      street: info.street,
      street2: info.street2,
      zip: info.zip,
      city: info.city,
      state: info.state,
      paymentType: info.paymentType,
      buyerId: sessionStorage.getItem('user'),
      sellerId: item.user,
      quantity: item.count,
      cardid: item.karta.id,
      oglasId: item.id

    })

  }

  getSpecificOglas(oglasId:string):any{
   this.oglas =  this.firestore.collection('oglasi').doc(oglasId).valueChanges()
     
     
     return this.oglas;
   
  }

  obrisiOglas(proizvod: Proizvod) {
    this.firestore.collection('oglasi').doc(proizvod.id).set({
      visible: 'false'
    })
  }

  findUsername(id: string) {
    return this.firestore.collection('users').doc(id).valueChanges();

  }

  logout() {
    this.firebaseAuth.signOut();
    sessionStorage.setItem('login', "false");
  }




}
