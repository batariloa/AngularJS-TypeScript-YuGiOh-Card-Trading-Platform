import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICart, Proizvod } from "./cart.model";

export const selectCountProducts  = createSelector(
    createFeatureSelector('cart'), 
    (state: ICart) => {
        return state.items.length;

    }


)

export const selectPriceKorpa = createSelector(

    createFeatureSelector('cart'),
    (state: ICart)=>
    {
        var sum = 0;
        state.items.forEach(element => {
            sum= sum +element.price;
            console.log(sum);
        });
        return sum;
    }
)

export const selectCart  = createSelector(
    createFeatureSelector('cart'), 
    (state: ICart) => {
        return state.items;

    }


)