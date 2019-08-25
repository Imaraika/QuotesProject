import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';


@Component({
  selector: 'app-quote-comp',
  templateUrl: './quote-comp.component.html',
  styleUrls: ['./quote-comp.component.css']
})
export class QuoteCompComponent implements OnInit {
  toggleDetails(index){
    this.manyQuotes[index].showDescription = !this.manyQuotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.manyQuotes.splice(index,1);
    }
  }
  manyQuotes:Quote[] =[
    {id:1,authorName:"Chris Brady",firstName:"Ange",quote:"No guts, no story",showDescription:false},
    {id:2,authorName:"Chris Brady",firstName:"Ange",quote:"My life is my message",showDescription:false},
    {id:3,authorName:"Chris Brady",firstName:"Ange",quote:"Screw it, let’s do it",showDescription:false},
  ];
  addNewQuote(quote){
    // let goalLength = this.manyQuotes.length;
    // goal.id = goalLength+1;
    // goal.completeDate = new Date(goal.completeDate)
    this.manyQuotes.push(quote)
  }
  upvote = 0;
  downvote = 0;

  upVoteQuote(){
   
  this.upvote++ ; 
  }
  downVoteQuote(){
    this.downvote++;
  }
  constructor() { }

  ngOnInit() {
  }

}
