import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwGroupBarChartContainerComponent } from './sw-group-bar-chart-container.component';
import { SwGroupBarChartComponent } from './sw-group-bar-chart/sw-group-bar-chart.component';

describe('SwGroupBarChartContainerComponent', () => {
  let component: SwGroupBarChartContainerComponent;
  let fixture: ComponentFixture<SwGroupBarChartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwGroupBarChartComponent, SwGroupBarChartContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwGroupBarChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
