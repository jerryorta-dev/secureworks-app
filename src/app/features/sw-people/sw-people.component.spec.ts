import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwPersonalStoreService } from './store/sw-personal-store.service';
import { SwChartContainerComponent } from './sw-chart-container/sw-chart-container.component';
import { SwChartComponent } from './sw-chart-container/sw-chart/sw-chart.component';
import { SwPersonalFormComponent } from './sw-personal-form/sw-personal-form.component';

import { SwPeopleComponent } from './sw-people.component';

describe('SwPeopleComponent', () => {
  let component: SwPeopleComponent;
  let fixture: ComponentFixture<SwPeopleComponent>;

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
        SwPeopleComponent,
        SwPersonalFormComponent,
      ],
      providers: [
        SwPersonalStoreService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
