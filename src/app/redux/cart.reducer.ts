
import { AddToCart, ADD_TO_CART, DELETE_FROM_CART } from "./cart.model.action";
import {  initialState, ICart} from "./cart.model";
import * as ActionsCart from "../redux/cart.model.action"

import { Action, createReducer, on } from "@ngrx/store";


export const reducer = createReducer(
    initialState,
    
    on(ActionsCart.AddToCart, (entries, product) => {
    const entriesClone: ICart = JSON.parse(JSON.stringify(entries));
    entriesClone.items.push(product)
      return entriesClone
    }),
)




