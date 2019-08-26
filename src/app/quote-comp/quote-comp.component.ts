import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';


@Component({
  selector: 'app-quote-comp',
  templateUrl: './quote-comp.component.html',
  styleUrls: ['./quote-comp.component.css']
})
export class QuoteCompComponent implements OnInit {
  preNum:number;
  lastNum:number;
  counter:number;
  
  toggleDetails(index){
    this.manyQuotes[index].showDescription = !this.manyQuotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.manyQuotes.splice(index,1);
    }
  }
  manyQuotes:Quote[] =[
    new Quote(1,'Chris Brady','Ange','No guts, no story',new Date(2019,3,14),0,0),
    new Quote(2,'Chris Brady','Ange','My life is my message',new Date(2019,3,14),0,0),
    new Quote(3,'Chris Brady','Ange','Screw it, let’s do it',new Date(2019,3,14),0,0),
  ];
  addNewQuote(quote){
    // let quoteLength = this.manyQuotes.length;
    // quote.id = quoteLength+1;
     quote.completeDate = new Date(quote.completeDate)
    this.manyQuotes.push(quote)
  }
  upVoteQuote(index){
    this.manyQuotes[index].upvotes++; 
  }
  downVoteQuote(index){
    this.manyQuotes[index].downvotes++;

  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.manyQuotes.length; this.counter++) {
      this.lastNum = this.manyQuotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
