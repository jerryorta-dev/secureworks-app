import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs';
import {
  ChartStore,
  intialChartStore,
  SwPersonalStoreService,
} from './store/sw-personal-store.service';
import { SwGroupBarChartContainerComponent } from './sw-group-bar-chart-container/sw-group-bar-chart-container.component';
import { SwGroupBarChartComponent } from './sw-group-bar-chart-container/sw-group-bar-chart/sw-group-bar-chart.component';

import { SwPeopleComponent } from './sw-people.component';
import {
  PersonalData,
  SwPersonalFormComponent,
} from './sw-personal-form/sw-personal-form.component';

describe('SwPeopleComponent', () => {
  let component: SwPeopleComponent;
  let fixture: ComponentFixture<SwPeopleComponent>;
  let storeSpy: any;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpy('storeSpy');

    class MockStoreService {
      store: BehaviorSubject<ChartStore> = new BehaviorSubject(intialChartStore);
      add(val: any): void {
        storeSpy(val);
      }
    }

    const mockStoreProvider: any = {
      provide: SwPersonalStoreService,
      useValue: new MockStoreService(),
    };

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
      providers: [mockStoreProvider],
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

  it('should add data to store', () => {
    const mockData: PersonalData = {
      name: 'Dude',
      age: 28,
      weight: 150,
      friends: 800,
    };

    component.onSubmit(mockData);

    expect(storeSpy).toHaveBeenCalledWith(jasmine.objectContaining(mockData));
  });
});
