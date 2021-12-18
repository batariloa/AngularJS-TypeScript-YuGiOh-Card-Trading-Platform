import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find} from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

   getCards(id:number){
     
    return this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?id='+id );
    }
    getAllCards(){
      return this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?staple=yes');
    }

    getOglasi(){
      return this.http.get("assets/json/oglasi.json/");
    }
    getOglas(id:number){
      return this.http.get("assets/json/oglasi.json/oglasi?id=3")
    }
}
