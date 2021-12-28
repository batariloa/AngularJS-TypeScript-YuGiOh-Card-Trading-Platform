

export interface ICart {
    items: Proizvod[];
    
  
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
    set: string = "";
    stanje: string = "";

}

export interface card_price{


    amazon_price: number;
    cardmarket__price:number;
    tcgplayer_price:number;
}
export const initialState:ICart= {
    items:[] as Proizvod[],
    

};


export interface Karta {
    author:string;
    likes:number;
    text:string;
    date:string;
    id:number;
    name: string;
    card_images:slike[];
    card_prices:card_price[];
    card_sets:card_sets[];
    
 

}

export interface slike{
    image_url:string;

}  

export interface User {
    id:number,
    username:string,
    posts:number,
    memberSince: string;
    displayName: string;
}

export interface card_sets{
    set_name:string;
}