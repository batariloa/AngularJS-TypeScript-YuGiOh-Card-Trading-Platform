import { ActivatedRouteSnapshot } from "@angular/router";
import { ICart, Proizvod, User } from "../redux/cart.model";

export interface Transakcija {

cart:ICart;
date: string;
sum:number;
user:User;
tipPlacanja:string;
kartica:KreditnKartica;
adresa:Adresa;


}

export interface KreditnKartica{
    broj:string;
    vlasnik:string;
    expire:string;
    cvv: string;
}

export interface Adresa{
    ulica:string;
    interfon:string;
    grad:string;
    zip:string;
    drzava:string;

}