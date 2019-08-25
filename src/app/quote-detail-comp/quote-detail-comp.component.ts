import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-detail-comp',
  templateUrl: './quote-detail-comp.component.html',
  styleUrls: ['./quote-detail-comp.component.css']
})
export class QuoteDetailCompComponent implements OnInit {
  @Input() qu: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
