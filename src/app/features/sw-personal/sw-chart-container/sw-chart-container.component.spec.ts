import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwChartContainerComponent } from './sw-chart-container.component';

describe('SwChartContainerComponent', () => {
  let component: SwChartContainerComponent;
  let fixture: ComponentFixture<SwChartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwChartContainerComponent],
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
