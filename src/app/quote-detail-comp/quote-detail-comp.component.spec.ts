import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailCompComponent } from './quote-detail-comp.component';

describe('QuoteDetailCompComponent', () => {
  let component: QuoteDetailCompComponent;
  let fixture: ComponentFixture<QuoteDetailCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetailCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
