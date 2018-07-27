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

    // Component has it's on change detection in the ngAfterViewInit
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO unit test the result.items.length condition path
  // http://mylifeandcode.blogspot.com/2017/03/how-to-mock-out-child-components-in.html
  // This example is not working, not sure why
});
