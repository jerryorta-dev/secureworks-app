import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwFriendsFormComponent } from './sw-friends-form.component';

describe('SwFriendsFormComponent', () => {
  let component: SwFriendsFormComponent;
  let fixture: ComponentFixture<SwFriendsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [ SwFriendsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFriendsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
