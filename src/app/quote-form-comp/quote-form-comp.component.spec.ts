import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFormCompComponent } from './quote-form-comp.component';

describe('QuoteFormCompComponent', () => {
  let component: QuoteFormCompComponent;
  let fixture: ComponentFixture<QuoteFormCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteFormCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
