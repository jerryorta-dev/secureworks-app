import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwPersonalStoreService } from './store/sw-personal-store.service';
import { SwGroupBarChartContainerComponent } from './sw-group-bar-chart-container/sw-group-bar-chart-container.component';
import { SwGroupBarChartComponent } from './sw-group-bar-chart-container/sw-group-bar-chart/sw-group-bar-chart.component';
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
        SwGroupBarChartContainerComponent,
        SwGroupBarChartComponent,
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
