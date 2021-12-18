

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
    cardid:number;
}

export const initialState:ICart= {
    items:[] as Proizvod[],
    cnt:0,
    sum:0
};


export class Karta {
    public author:string;
    public likes:number;
    public text:string;
    public date:string;
    public id:number;
    

    constructor(author:string, likes:number,text:string,date:string,id:number){

        this.author=author;
        this.date=date;
        this.likes=likes;
        this.text=text;
        this.id=id;

    }

}