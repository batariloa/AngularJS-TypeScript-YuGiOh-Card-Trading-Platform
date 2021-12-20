

export interface ICart {
    items: Proizvod[];
    cnt: number; //Counter
    sum: number; //Cash summary
}
export class Proizvod {
    id: number =0;
    name: string = "";
    count: number = 0;
    quantity:number = 0;
    price: number= 0;
    karta: Karta = {} as Karta;
    user:User = {} as User;
    cardid:number = 0;
}

export const initialState:ICart= {
    items:[] as Proizvod[],
    cnt:0,
    sum:0
};


export interface Karta {
    author:string;
    likes:number;
    text:string;
    date:string;
    id:number;
    name: string;
    card_images:slike[];
    
 

}

export interface slike{
    image_url:string;

}  

export interface User {
    id:number,
    username:string,
    posts:number,
    memberSince: string
}