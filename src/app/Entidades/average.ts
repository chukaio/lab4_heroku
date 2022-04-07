export class Average {

    firstDate:number;
    secondDate:number;
    sum:number;
    average:number;

    constructor(){
        this.firstDate=0;
        this.secondDate=0;
        this.sum=0;
        this.average=0;
    }

    Sum(){
        this.sum=Number.parseFloat(this.firstDate.toString())+Number.parseFloat(this.secondDate.toString());
    }

    Average(){
        this.average=this.sum/2;
    }

    Clean(){
        this.firstDate=0;
        this.secondDate=0;
        this.sum=0;
        this.average=0;
    }
}
