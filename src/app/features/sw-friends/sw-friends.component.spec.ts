import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwFriendsFormComponent } from './sw-friends-form/sw-friends-form.component';

import { SwFriendsComponent } from './sw-friends.component';

describe('SwFriendsComponent', () => {
  let component: SwFriendsComponent;
  let fixture: ComponentFixture<SwFriendsComponent>;

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
        SwFriendsComponent,
        SwFriendsFormComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
