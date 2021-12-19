
  
import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';

import { ICart, Proizvod } from './cart.model';



export const ADD_TO_CART = 'ADD_TO_CART';
  export const DELETE_FROM_CART = 'DELETE_FROM_CART';



  export const AddToCart = createAction(
    ADD_TO_CART, 
    props<Proizvod>()
  );
  export const DeleteFromCart = createAction(
   DELETE_FROM_CART, 
    props<Proizvod>()
  );