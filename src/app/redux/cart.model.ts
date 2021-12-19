

export interface ICart {
    items: Proizvod[];
    cnt: number; //Counter
    sum: number; //Cash summary
}
export interface Proizvod {
    id: number;
    name: string;
    count: number;
    quantity:number;
    price: number;
    karta: Karta;
    cardid:number;
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