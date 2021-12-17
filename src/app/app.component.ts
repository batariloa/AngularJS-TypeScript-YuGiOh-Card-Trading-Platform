import { Component } from '@angular/core';
import * as CartActions from './redux/cart.model.action';
import { ICart, Proizvod } from './redux/cart.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './models/app.state';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'YuGiOhStore';

  proizvod:Proizvod= {} as Proizvod;


  constructor(private store:Store<AppState>){

  }


}
