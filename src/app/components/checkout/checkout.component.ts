import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Transakcija } from 'src/app/models/transakcija';
import { OrderInfo, Proizvod } from 'src/app/redux/cart.model';
import { selectCart, selectPriceKorpa } from 'src/app/redux/cart.selectors';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart$:Observable<Proizvod[]> = new Observable;
  sum$: Observable<Number>  = new Observable
  cartItems:any = [];
 info:OrderInfo = {} as OrderInfo;
  transakcijaForma: FormGroup;
  transakcijaFormaPlacanje: FormGroup;
  submitted:boolean = false;
  kreditnaKarticaChecked:boolean=false;
  
  constructor(private store:Store, private fb:FormBuilder, private router:Router, private firestore:FirebaseService) {

    this.transakcijaForma = this.fb.group({
      ulica: fb.control('',[Validators.required, Validators.minLength(3)]),
      drzava: fb.control('',[Validators.required]),
      grad: fb.control('',[Validators.required]),
      zip: fb.control('',[Validators.required]),
      tipPlacanja: fb.control('',[Validators.required]),
      ulica2:fb.control('',null)
      
      
    })

    this.transakcijaFormaPlacanje = this.fb.group({

      ime: fb.control('',[Validators.required]),
      datum: fb.control('',[Validators.required]),
      cvv: fb.control('',[Validators.required]),
      brojKartice: fb.control('',[Validators.required, Validators.pattern("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$")]),
      
    })


    this.cart$ = this.store.select(selectCart);
  }

  ngOnInit(): void {
   
    this.sum$ = this.store.select(selectPriceKorpa)
    this.cart$.subscribe(val=>
      {
        this.cartItems = val
        console.log("cart "+ this.cartItems[0].karta.name )
      })
  }


  onSubmit() {
    this.submitted = true;
    console.log("tip placanja je "+this.control('tipPlacanja')?.value)
    if(this.control('tipPlacanja')?.value == 'false' && this.transakcijaForma.valid ){
     this.posaljiTransakciju()

    }
    else if (this.transakcijaForma.valid && this.transakcijaFormaPlacanje.valid ){
     this.posaljiTransakciju()
    }
  }

  posaljiTransakciju(){
    console.log("cart items trenutno " + this.cartItems[0])
    this.info.paymentType = this.transakcijaForma.get('tipPlacanja')!.value;
  this.info.street = this.transakcijaForma.get('ulica')!.value;
  this.info.street2 = this.transakcijaForma.get('ulica2')!.value;
  this.info.zip= this.transakcijaForma.get('zip')!.value;
  this.info.city = this.transakcijaForma.get('grad')!.value;
  this.info.state = this.transakcijaForma.get('drzava')!.value;
  console.log("ulica je " +this.info.street!)
 
    this.firestore.checkout(this.cartItems, this.info)
    this.router.navigate(['/success'], {queryParams: {id:2321532423}});
  
  }

  public control(name:string){
    console.log(this.transakcijaForma.get(name)?.errors)
    return this.transakcijaForma.get(name);
  }

  public controlKartica(name:string){
   
    return this.transakcijaFormaPlacanje.get(name);
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.transakcijaForma.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
            console.log(name)
        }
    }
    return invalid;
}

}


