import { StickyDirection } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { map, Observable, of, startWith } from 'rxjs';


import { card_sets, Karta, Proizvod } from 'src/app/redux/cart.model';

import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-add-oglas',
  templateUrl: './add-oglas.component.html',
  styleUrls: ['./add-oglas.component.css']
})


export class AddOglasComponent implements OnInit {
  public forma: FormGroup;
  control = new FormControl();
  oglasDodaj:Proizvod = {} as Proizvod;
  karte: Karta[] = [];
  izabranaKartaId = 0;
  kartaImgUrl = "https://i.imgur.com/UjbK2Wb.png";
  filtriraneKarte:Karta[] = [];
  setovi:card_sets[] = [];
  submitted = false;
  input:string = ""
    karte$: Observable<Karta[]> = new Observable;
  constructor(private formBuilder: FormBuilder, private yuguiohService: ApiService, private fireService: FirebaseService) {
   
 
    this.forma = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(4),]],
        set: [
          '',
          [
            Validators.required,
        
          ]
        ],
       kolicina: ['', [Validators.required, Validators.min(1)]],
       cena: [
          '',
          [
            Validators.required,
            Validators.min(1),
            Validators.max(9999)
          ]
        ],
        stanje: ['', [Validators.required, Validators.minLength(4)]],
  
      }
    )

  

   }

  ngOnInit(): void {

    this.yuguiohService.getAllCards().subscribe( (val:any) =>{
      this.karte = val.data;
   
      this.karte$= this.control.valueChanges
      .pipe(
        startWith(this.input),
        map(ime => ime ? this.filterCards(ime) : this.karte.slice())
      );
    
    }

  )

}
private filterCards(name:string){
  return this.karte.filter((karta:Karta) =>
    karta.name.toLowerCase().indexOf(name.toLocaleLowerCase()) === 0);
}


dodajOglas(){
  
  if(this.forma.valid){
  this.oglasDodaj.cardid = this.izabranaKartaId;
  this.oglasDodaj.username = sessionStorage.getItem('username')!;
  
  this.fireService.addOglas(this.oglasDodaj);
     this.forma.reset()
     this.submitted = false;
  }
  else{
    this.submitted=true;
  }
}

getOptionName(option:any): string {

 
  return option.name;
}
promeniKartu(karta:Karta){
  this.izabranaKartaId = karta.id;
  this.setovi = karta.card_sets;
  this.kartaImgUrl = karta.card_images[0].image_url;
  console.log("promenjena karta" + karta.name + " i " + karta.id + " a takodje "+ this.oglasDodaj.set) 

}

promeniSet(set:any){
  this.oglasDodaj.set = set.value

}
public controlM(name:string){
  console.log(this.forma.get(name)?.errors)
  return this.forma.get(name);
}
}
