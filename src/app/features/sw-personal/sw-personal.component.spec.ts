import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwPersonalStoreService } from './store/sw-personal-store.service';
import { SwChartContainerComponent } from './sw-chart-container/sw-chart-container.component';
import { SwChartComponent } from './sw-chart-container/sw-chart/sw-chart.component';
import { SwPersonalFormComponent } from './sw-personal-form/sw-personal-form.component';

import { SwPersonalComponent } from './sw-personal.component';

describe('SwPersonalComponent', () => {
  let component: SwPersonalComponent;
  let fixture: ComponentFixture<SwPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [
        SwChartContainerComponent,
        SwChartComponent,
        SwPersonalComponent,
        SwPersonalFormComponent,
      ],
      providers: [
        SwPersonalStoreService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
