export class Quote {
    showDescription:boolean
    constructor(public id: number,public authorName: string,public firstName: string,public quote:string,public completeDate: Date){
   this.showDescription=false;
}

}
