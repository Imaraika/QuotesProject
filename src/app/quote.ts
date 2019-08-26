export class Quote {
    showDescription:boolean
    constructor(public id: number,public authorName: string,public firstName: string,public quote:string,public completeDate: Date,public upvotes: number,
        public downvotes: number){
   this.showDescription=false;
   this.upvotes=0;
   this.downvotes=0
}

}
