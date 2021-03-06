
import { AddToCart, ADD_TO_CART, DELETE_FROM_CART } from "./cart.model.action";
import {  initialState, ICart, Proizvod} from "./cart.model";
import * as ActionsCart from "../redux/cart.model.action"

import { Action, createReducer, on } from "@ngrx/store";
import { state } from "@angular/animations";
import { ProductPreviewComponent } from "../components/product-preview/product-preview.component";


export const reducer = createReducer(
    initialState,
    
    on(ActionsCart.AddToCart, (entries, product) => {
    const entriesClone: ICart = JSON.parse(JSON.stringify(entries));
    const productCopy: Proizvod = JSON.parse(JSON.stringify(product));

   
    let dodaj = true;
    entriesClone.items.forEach(element => {
      
      if(element.cardid===product.cardid){
        
        if(element.count<element.quantity){
          
        element.count++;   
        }
        dodaj = false;
    
      }
     
    })
    if(dodaj==true && productCopy.count<=productCopy.quantity){
      entriesClone.items.push(productCopy);
    
    }
      return entriesClone
    }),

on(ActionsCart.DeleteFromCart, (entries, product) => {
  const entriesClone: ICart = JSON.parse(JSON.stringify(entries));
  const productCopy: Proizvod = JSON.parse(JSON.stringify(product));
 

  entriesClone.items.forEach(element => {
    if(element.cardid===product.karta.id && element.count==1){
     
      entriesClone.items.splice(entriesClone.items.findIndex(function(i){
   
        return i.cardid === product.karta.id;
    }), 1);
    } else if(element.cardid===product.karta.id){
      element.count--;
    }

  });

    return entriesClone
  }

)
)



