import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteCompComponent } from './quote-comp/quote-comp.component';
import { QuoteFormCompComponent } from './quote-form-comp/quote-form-comp.component';
import { QuoteDetailCompComponent } from './quote-detail-comp/quote-detail-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCompComponent,
    QuoteFormCompComponent,
    QuoteDetailCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
