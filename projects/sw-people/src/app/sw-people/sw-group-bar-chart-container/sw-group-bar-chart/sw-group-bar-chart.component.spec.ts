import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwGroupBarChartComponent } from './sw-group-bar-chart.component';

describe('SwGroupBarChartComponent', () => {
  let component: SwGroupBarChartComponent;
  let fixture: ComponentFixture<SwGroupBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwGroupBarChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwGroupBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
