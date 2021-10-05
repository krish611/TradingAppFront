import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingDataViewComponent } from './trading-data-view.component';

describe('TradingDataViewComponent', () => {
  let component: TradingDataViewComponent;
  let fixture: ComponentFixture<TradingDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingDataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
