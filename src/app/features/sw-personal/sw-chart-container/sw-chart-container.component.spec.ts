import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwChartContainerComponent } from './sw-chart-container.component';
import { SwChartComponent } from './sw-chart/sw-chart.component';

describe('SwChartContainerComponent', () => {
  let component: SwChartContainerComponent;
  let fixture: ComponentFixture<SwChartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwChartComponent,
        SwChartContainerComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
