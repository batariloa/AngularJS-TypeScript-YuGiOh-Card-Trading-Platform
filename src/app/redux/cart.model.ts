import { Karta } from "../models/karta";

export interface ICart {
    items: Proizvod[];
    cnt: number; //Counter
    sum: number; //Cash summary
}
export interface Proizvod {
    id: number;
    name: string;
    count: number;
    price: number;
    karta: Karta;
}

export const initialState:ICart= {
    items:[] as Proizvod[],
    cnt:0,
    sum:0
};

export interface Post {
    likes:number,
    text:String
}