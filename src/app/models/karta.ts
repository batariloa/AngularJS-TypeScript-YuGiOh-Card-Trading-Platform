export class Karta {
    public author:string;
    public likes:number;
    public text:string;
    public date:string;
    id:string;

    constructor(author:string, likes:number,text:string,date:string,id:string){

        this.author=author;
        this.date=date;
        this.likes=likes;
        this.text=text;
        this.id=id;

    }

}