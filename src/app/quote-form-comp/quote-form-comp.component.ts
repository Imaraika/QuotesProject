import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import{Quote} from '../quote';
@Component({
  selector: 'app-quote-form-comp',
  templateUrl: './quote-form-comp.component.html',
  styleUrls: ['./quote-form-comp.component.css']
})
export class QuoteFormCompComponent implements OnInit {
  newQuote = new Quote(0,"","","", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
