import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwChartComponent } from './sw-chart.component';

describe('SwChartComponent', () => {
  let component: SwChartComponent;
  let fixture: ComponentFixture<SwChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
