import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICart, Proizvod } from "./cart.model";

export const selectCountProducts  = createSelector(
    createFeatureSelector('cart'), 
    (state: ICart) => {
        return state.items.length;

    }
)